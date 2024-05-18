'use client'

import { signOut, useSession } from 'next-auth/react';
import React from 'react';
import Container from '../components/Container';
import { redirect } from 'next/navigation';
import Loading from '../components/Loading';

const Dashboard = () => {

    const { data: session, status } = useSession()

    if (status === 'loading') {
        return <Loading />
    }

    if (status === 'unauthenticated') {
        redirect('/')
    }

    return (
        <div>
            <Container>
                <h1>DASHBOARD</h1>
                <button onClick={() => signOut()}>Me déconnecter</button>
            </Container>
        </div>
    );
};

export default Dashboard;