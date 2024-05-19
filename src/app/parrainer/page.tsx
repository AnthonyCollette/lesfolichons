import React from 'react';
import Container from '../components/Container';
import H1 from '../components/H1';
import Pigs from '../assets/images/guinea-pigs.jpg';
import Image from 'next/image';

const Parrainer = () => {
    return (
        <main>
            <Container>
                <H1 text="Parrainer un animal" customClass='text-center' />
                <section className='section-w-img'>
                    <div className='left_column'>
                        <p>Parrainer un animal c’est avant tout l’aider à améliorer son quotidien.
                            Parrainer un animal c’est également encourager les responsables et les bénévoles de l'association dans leur action et nous permettre de continuer à fournir une bonne qualité de vie à nos petits protégés.
                            Parrainer un animal c’est un geste pour lui dire tout simplement qu’on l’aime et qu’on ne l’oublie pas.</p>
                        <p>
                            Vous ne pouvez pas adopter, mais pourtant vous souhaitez apporter votre contribution au bien-être de ces animaux délaissés ?
                            Vous pouvez devenir parrain ou marraine de l’un ou plusieurs de ces animaux et ainsi nous aider à subvenir à leur besoins, à prendre soin d’eux et à leur offrir une vie digne et heureuse. Le système de parrainage est un moyen simple et concret d’être efficace et d’agir en faveur de la protection animale, même à distance.</p>
                        <p>L'association Les Foli'chons propose un système de parrainage pour les animaux difficilement adoptables ou en hébergement longue durée. Cette formule permet aux personnes qui le désirent, de pouvoir apporter un soutien financier régulier et, ainsi, nous soutenir au quotidien dans nos missions.
                        </p>
                        <p>Bien entendu vous pouvez venir voir votre protégé à l'association si celui-ci n'a pas été adopté, lui offrir un cadeau ou lui amener des friandises. <br />
                            NOTE : Vous pouvez parrainer plusieurs animaux et un animal peut avoir plusieurs parrains/marraines</p>
                        <p>
                            Pour voir tous les loulous qui attendent un parrain ou une marraine, rendez-vous sur notre page Facebook ! Vous pouvez aussi nous contacter à ce sujet via le formulaire de contact.</p>
                    </div>
                    <div className='right_column'>
                        <Image src={Pigs} alt="Cochons d'Inde" sizes='100vw' style={{width: '100%', height: 'auto'}} />
                    </div>
                </section>
            </Container>
        </main>
    );
};

export default Parrainer;