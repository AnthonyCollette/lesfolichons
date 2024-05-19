import React from 'react';
import Container from '../components/Container';
import Image from 'next/image';
import GuineaPig from '../assets/images/guinea-pig.jpg';
import H1 from '../components/H1';
import GuineaSvg from '../assets/images/guinea-svg.svg';

const Association = () => {
    return (
        <main>
            <Container>
                <H1 text="L'association" customClass="text-center" />
                <section className='section-w-img'>
                    <div className='left_column'>
                        <p>Les Foli'chons est une association à but non lucrative (loi 1901), créée en Octobre 2019.</p>
                        <p>L'association est uniquement spécialisée dans les cochons d'inde et prend en charge les boules de poils issus d'abandon ou issus de sauvetage. <br />
                            Nous comptabilisons plus de 300 doudous sauvés en l'espace de 2 ans !</p>
                        <p className='text-underline'>Nos missions principales :</p>
                        <ul>
                            <li>La prise en charge et la protection des cochons d'inde.</li>
                            <li>La sensibilisation face à ce nouvel animal de compagnie.</li>
                            <li>Nous avons aussi à cœur de proposer nos loulous ensuite à l'adoption afin qu'ils connaissent enfin la joie et l'amour d'un foyer !</li>
                        </ul>
                        <Image src={GuineaSvg} alt="Cochon d'Inde en noir et blanc" sizes='100vw' style={{width: '50%', height: 'auto'}} />
                    </div>
                    <div className='right_column'>
                        <Image src={GuineaPig} alt="Cochon d'Inde" sizes='100vw' style={{width: '100%', height: 'auto'}}/>
                    </div>
                </section>
            </Container>
        </main>
    );
};

export default Association;