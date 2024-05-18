'use client'

import { signIn, useSession } from 'next-auth/react';
import React from 'react';
import Container from '../components/Container';

const Dashboard = () => {

    const { data: session, status } = useSession()

    if (status === 'loading') {
        return <h1>Loading</h1>
    }

    if (status === 'unauthenticated') {
        signIn()
    }

    return (
        <div>
            <Container>
                <h1>DASHBOARD</h1>
            </Container>
        </div>
    );
};

export default Dashboard;