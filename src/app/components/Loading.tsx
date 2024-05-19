import React from 'react';
import Container from './Container';
import loader from '../assets/images/loader.gif';
import Image from 'next/image';

const Loading = () => {
    return (
        <div className='loading'>
            <Container>
                <div className='loading__image'>
                    <Image src={loader} alt="Pattes d'animal" sizes='100vw' style={{ width: '100%', height: 'auto' }} />
                </div>
            </Container>
        </div>
    );
};

export default Loading;