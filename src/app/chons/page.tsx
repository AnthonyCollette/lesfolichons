'use client'

import React, { useEffect, useState } from 'react';
import Container from '../components/Container';
import Chon from '../components/Chon';
import H1 from '../components/H1';

const Chons = () => {

    const [chons, setChons] = useState(Array || null)

    useEffect(() => {
        fetch('/api/get-pets', { next: {revalidate: 60}}).then((response) => response.json()).then(data => setChons(data)).catch((error) => console.log(error))
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