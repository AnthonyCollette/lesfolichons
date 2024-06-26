'use client'

import Container from '@/app/components/Container';
import H1 from '@/app/components/H1';
import Loading from '@/app/components/Loading';
import { cp } from 'fs';
import Image from 'next/image';
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
        <main className='chon-details'>
            <Container>
                {loading && <Loading />}
                {!loading && data.length < 1 && <p>Oops, il y a eu une erreur...</p>}
                {!loading && data.length > 0 && <>
                    <H1 text={data[0]?.name} customClass='text-center' />
                    <div className='section-w-img'>
                        <div className='left-column'>
                            <p>{data[0].description}</p>
                        </div>
                        <div className='right-column'>
                            <Image alt={`Photo de ${data[0].name}`} src={data[0].image} width={400} height={400} sizes='100vw' style={{ width: '70%', height: 'auto' }} />
                        </div>
                    </div>
                </>}
            </Container>
        </main>
    );
};

export default Page;