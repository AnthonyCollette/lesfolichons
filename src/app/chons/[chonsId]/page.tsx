'use client'

import Container from '@/app/components/Container';
import H1 from '@/app/components/H1';
import Loading from '@/app/components/Loading';
import { cp } from 'fs';
import React, { useEffect, useState } from 'react';

const Page = ({ params }: { params: { chonsId: number } }) => {

    const [data, setData] = useState(Object)
    const [loading, setLoading] = useState(true)

    const getData = async () => {
        await fetch(`/api/get-pets/${params.chonsId}`).then(res => res.json()).then(data =>
            setData(data)).catch(err => console.log(err)).finally(() => setLoading(false))
    }

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        console.log(data)
    }, [data])

    return (
        <main>
            <Container>
                {loading && <Loading />}
                {!loading && data.length < 1 && <p>Oops, il y a eu une erreur...</p>}
                {!loading && data.length > 0 && <>
                <H1 text={`Bienvenue sur la page de ${data[0]?.name}`} customClass='text-center' />
                <p>{data[0].description}</p>
                </>}
            </Container>
        </main>
    );
};

export default Page;