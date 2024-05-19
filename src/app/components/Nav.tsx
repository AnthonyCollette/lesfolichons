'use client'

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '../assets/images/logo.webp';
import Container from './Container';
import { signOut, useSession } from 'next-auth/react';
import { FaChevronDown, FaExternalLinkAlt } from "react-icons/fa";

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

    const adoptMenu = [{
        link: '/adoption-responsable',
        text: "L'adoption responsable"
    }, {
        link: '/chons',
        text: "Nos chons à l'adoption"
    }, {
        link: 'https://docs.google.com/forms/d/1yaekx7IG4OTmL07PdMFbHr-jo_WIAxLWuvmESOaXLeo/viewform?fbclid=IwAR1blJGCIxdQc0Z4KGbMGPlfBkzRN8n51QAegH1RJkHI7Tp1qQCfzHeBR6Q&edit_requested=true',
        text: "Formulaire d'adoption",
        blank: true
    }]

    const helpMenu = [{
        link: '/devenir-famille-accueil',
        text: "Devenir famille d'accueil"
    }, {
        link: '/parrainer',
        text: "Parrainer un animal"
    }, {
        link: '/donate',
        text: "Faire un don"
    }]

    const links = [{
        link: '/',
        text: 'Accueil'
    }, {
        link: '/association',
        text: 'Association'
    }, {
        link: '/adopter',
        text: 'Adopter',
        submenu: true,
        subitems: adoptMenu
    }, {
        link: '/nous-aider',
        text: 'Nous aider',
        submenu: true,
        subitems: helpMenu
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
                                return <li key={index}><Link href={link.link} target='_blank'>{link.text} <FaExternalLinkAlt /></Link></li>
                            }
                            if (link.submenu) {
                                return <div className='sub-menu' key={index}>
                                    <p>{link.text}</p> <FaChevronDown />
                                    <ul>
                                        {link.subitems.map((item, index) => {
                                            if (item.blank) {
                                                return <li key={index}><Link href={item.link} target='_blank'>{item.text} <FaExternalLinkAlt /></Link></li>
                                            }
                                            return <li key={index}><Link href={item.link}>{item.text}</Link></li>
                                        })}
                                    </ul>
                                </div>
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