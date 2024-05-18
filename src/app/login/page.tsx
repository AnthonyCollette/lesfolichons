'use client'

import React from 'react';
import { signIn, useSession } from 'next-auth/react';
import Container from '../components/Container';
import { redirect } from 'next/navigation';
import Loading from '../components/Loading';

const Login = () => {

    const { data: session, status } = useSession()

    if (status === 'loading') {
        return <Loading />
    }

    if (status === 'authenticated') {
        redirect('/dashboard')
    }

    return (
        <div className='login'>
            <Container>
                <button onClick={() => signIn()} className='btn'>Se connecter</button>
            </Container>
        </div>
    );
};

export default Login