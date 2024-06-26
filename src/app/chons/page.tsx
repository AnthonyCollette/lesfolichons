'use client'

import React, { useEffect, useState } from 'react';
import Container from '../components/Container';
import Chon from '../components/Chon';
import H1 from '../components/H1';
import { unstable_noStore as noStore } from 'next/cache';

const Chons = () => {

    const [chons, setChons] = useState(Array || null)

    useEffect(() => {
        noStore()
        fetch('/api/get-pets').then((response) => response.json()).then(data => setChons(data)).catch((error) => console.log(error))
    }, [])


return (
    <main>
        <Container>
            <section>
                <H1 text="Les chons à adopter" customClass='text-center' />
                <ul className='chons-list'>
                    {chons.map((chon: any) => {
                        return <Chon key={chon.id} title={chon.name} image={chon.image} id={chon.id} />
                    })}
                </ul>
            </section>
        </Container>
    </main>
);
};

export default Chons;