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

const Dashboard = () => {

    const { data: session, status } = useSession()

    const [petName, setPetName] = useState(String)
    const [petId, setPetId] = useState(uuidv4())
    const [petDesc, setPetDesc] = useState(String)
    const [blob, setBlob] = useState<PutBlobResult | null>(null)
    const router = useRouter()

    const inputFileRef = useRef<HTMLInputElement>(null)


    const form = useRef<HTMLFormElement>(null)

    const createPet = async (e: FormEvent) => {
        e.preventDefault()
        if (!inputFileRef?.current?.files) {
            throw new Error("Il n'y a pas d'image téléversée")
        }
        const file = inputFileRef.current.files[0]
        const response = await fetch(`/api/upload-img?filename=${file.name}`, {
            method: 'POST',
            body: file
        })
        const newBlob = (await response.json()) as PutBlobResult

        await fetch(`/api/add-pet?name=${petName}&id=${petId}&description=${petDesc}&image=${newBlob.url}`).then(() => {
            setPetName('')
            setPetId('')
            setPetDesc('')
            form?.current?.reset()
        }).catch(err => console.log(err))
    }

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
            </Container>
        </main>
    );
};

export default Dashboard;