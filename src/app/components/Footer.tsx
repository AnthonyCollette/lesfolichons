import Link from 'next/link';
import React from 'react';
import Container from './Container';

const Footer = () => {
    return (
        <footer>
            <Container>
                <p>Notre adresse mail</p>
                <Link href="/">lesfolichons21@gmail.com</Link>
            </Container>
        </footer>
    );
};

export default Footer;