import React from 'react';
import { Delius_Swash_Caps } from "next/font/google";
import Image from 'next/image';
import GuineaPigs from '../assets/images/guineapigs.jpg';
import Overlay from './Overlay';

const delius = Delius_Swash_Caps({ subsets: ["latin"], weight: ['400'] });

const Header = () => {

    return (
        <header>
            <Image src={GuineaPigs} alt="Cochons d'indes" layout='fill' objectFit='cover' />
            <Overlay>
                <h1 className={delius.className}>Les foli'chons</h1>
                <h2>Association de protection des cochons d'inde : <br />
                    Sauvetage, accueil, garde et adoption</h2>
            </Overlay>
        </header>
    );
};

export default Header;