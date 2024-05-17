import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '../assets/images/logo.webp';
import Container from './Container';

const Nav = () => {
    return (
        <nav>
            <Container>
                <Link href="/">
                    <Image src={logo} alt="Logo" width={100} />
                </Link>
                <ul>
                    <li>
                        <Link href="/">Accueil</Link>
                    </li>
                    <li>
                        <Link href="/">L'association</Link>
                    </li>
                    <li>
                        <Link href="/">Adopter</Link>
                    </li>
                    <li>
                        <Link href="/">Nous aider</Link>
                    </li>
                    <li>
                        <Link href="/">Contact</Link>
                    </li>
                    <li>
                        <Link href="https://boutique-folichons.com/" target='_blank'>Boutique</Link>
                    </li>
                </ul>
            </Container>
        </nav>
    );
};

export default Nav;