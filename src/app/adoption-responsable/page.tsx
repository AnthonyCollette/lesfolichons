import React from 'react';
import H1 from '../components/H1';
import Container from '../components/Container';
import Image from 'next/image';
import GuineaPig from '../assets/images/guinea-pig-bridge.jpg';

const AdoptionResponsable = () => {
    return (
        <main className='adoption'>
            <section>
                <Container>
                    <H1 text="L'adoption responsable" customClass='text-center' />
                    <p>Le cochon d’Inde est un animal grégaire, c’est-à-dire qu’il vit en groupe. Un cobaye seul peut développer des troubles comportementaux dus à l’isolement : agressivité, stress intense, anorexie, léthargie, malpropreté…</p>
                    <p>Nous pouvons vous garantir un animal équilibré à l’adoption, mais le reste de son évolution ne dépendra que de vous et des conditions de vie que vous allez lui fournir. Aussi, nous nous assurons au préalable que nos animaux seront placés dans de bonnes conditions (nombre d’animaux, type d’habitat…).
                    </p>
                    <p>Nous nous donnons le droit de refuser une adoption en cas de doute, et ce jusqu’au jour de l’adoption.</p>
                    <p>L’adoption d’un être-vivant quel qu’il soit n’est pas un jeu, il engage à une certaine responsabilité de vos enfants et/ou de vous même. Cet animal peut vous apporter beaucoup de bonheur, faites en sorte qu’il en soit de même pour lui.
                    </p>
                    <p>Il n’y a pas qu’une seule façon de s’occuper correctement d’un cochon d’Inde, et nous sommes là pour en discuter avec vous.</p>
                    <Image src={GuineaPig} alt="Cochon d'Inde sous un pont de bois" sizes='100vw' style={{width: '100%', height: 'auto'}} />
                </Container>
            </section>
        </main>
    );
};

export default AdoptionResponsable;