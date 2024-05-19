'use client'

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '../assets/images/logo.webp';
import Container from './Container';
import { signOut, useSession } from 'next-auth/react';
import { FaChevronDown } from "react-icons/fa";

const Nav = () => {

    const { data: session, status } = useSession()

    const dashboardButton = () => {
        if (status === 'authenticated') {
            return <div className='sub-menu'>
                <p>Mon profil</p> <FaChevronDown />

                <ul>
                    <li><Link href="/dashboard">Dashboard</Link></li>
                    <li onClick={() => signOut()}>Me déconnecter</li>
                </ul>
            </div>
        }
    }

    const links = [{
        link: '/',
        text: 'Accueil'
    }, {
        link: '/association',
        text: 'Association'
    }, {
        link: '/adopter',
        text: 'Adopter'
    }, {
        link: '/nous-aider',
        text: 'Nous aider'
    }, {
        link: '/contact',
        text: 'Contact'
    }, {
        link: 'https://boutique-folichons.com/',
        text: 'Boutique',
        blank: true
    }]
    

    return (
        <nav>
            <Container>
                <Link href="/">
                    <Image src={logo} alt="Logo" width={100} />
                </Link>
                <div className='nav__right'>
                <ul>
                    {links.map((link, index) => {
                        if (link.blank) {
                            return <li key={index}><Link href={link.link} target='_blank'>{link.text}</Link></li>
                        }
                        return <li key={index}><Link href={link.link}>{link.text}</Link></li>
                    })}
                </ul>
                {dashboardButton()}
                </div>
            </Container>
        </nav>
    );
};

export default Nav;