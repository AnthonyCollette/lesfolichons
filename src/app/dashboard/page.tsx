'use client'

import { signOut, useSession } from 'next-auth/react';
import React, { FormEvent, useEffect, useRef, useState } from 'react';
import Container from '../components/Container';
import { redirect } from 'next/navigation';
import Loading from '../components/Loading';
import { v4 as uuidv4 } from 'uuid';
import { useRouter } from 'next/navigation';
import { PutBlobResult, put } from '@vercel/blob';
import H1 from '../components/H1';
import { unstable_noStore as noStore } from 'next/cache';

const Dashboard = () => {

    const { data: session, status } = useSession()

    const [petName, setPetName] = useState(String)
    const [petId, setPetId] = useState(uuidv4())
    const [petDesc, setPetDesc] = useState(String)
    const [blob, setBlob] = useState<PutBlobResult | null>(null)
    const [pets, setPets] = useState(Array || null)
    const [loading, setLoading] = useState(true)
    const router = useRouter()

    const inputFileRef = useRef<HTMLInputElement>(null)


    const form = useRef<HTMLFormElement>(null)

    const createPet = async (e: FormEvent) => {
        e.preventDefault()
        noStore()
        if (!inputFileRef?.current?.files) {
            throw new Error("Il n'y a pas d'image téléversée")
        }
        const file = inputFileRef.current.files[0]
        const response = await fetch(`/api/upload-img?filename=${file.name}`, {
            method: 'POST',
            body: file
        })
        const newBlob = (await response.json()) as PutBlobResult

        await fetch(`/api/add-pet?name=${petName}&id=${petId}&description=${petDesc}&image=${newBlob.url}`, {next: {revalidate: 0}}).then(() => {
            setPetName('')
            setPetId(uuidv4())
            setPetDesc('')
            form?.current?.reset()
        }).catch(err => console.log(err))
    }

    const getPets = async () => {
        fetch('/api/get-pets').then(response => response.json()).then(data => setPets(data)).catch(err => console.log(err)).finally(() => setLoading(false))
    }

    const removePet = async (id: string, url: string) => {
        fetch(`/api/remove-pet?id=${id}`).catch(err => console.log(err))
        fetch(`/api/delete-img?url=${url}`).catch(error => console.log(error))
    }

    useEffect(() => {
        console.log('test')
        if (status === 'authenticated') {
            getPets()
        }
    }, [status])

    if (status === 'loading') {
        return <Loading />
    }

    if (status === 'unauthenticated') {
        redirect('/')
    }

    return (
        <main>
            <Container>
                <H1 text="Dashboard" customClass='text-center' />
                <section>
                    <h2>Ajouter un chon à l'adoption</h2>
                    <form onSubmit={(e) => createPet(e)} ref={form}>
                        <div className='form-group'>
                            <label htmlFor='name'>Nom</label>
                            <input type="text" name='name' onChange={(e) => setPetName(e.target.value)} />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='description'>Description</label>
                            <textarea onChange={(e) => setPetDesc(e.target.value)} name='description' />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='image'>Photo</label>
                            <input type='file' ref={inputFileRef} name='image' />
                        </div>
                        <button type="submit" className='btn btn--primary'>Sauvegarder <span></span></button>
                    </form>
                </section>
                <section>
                    <h2>Retirer un chon de l'adoption</h2>

                    {!loading && pets.map((pet: any) => {
                        return <button key={pet.id} onClick={() => removePet(pet.id, pet.image)}>{pet.name}</button>
                    })}
                </section>

            </Container>
        </main>
    );
};

export default Dashboard;