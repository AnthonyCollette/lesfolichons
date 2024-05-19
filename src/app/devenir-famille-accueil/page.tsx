import React from 'react';
import Container from '../components/Container';
import Link from 'next/link';
import GuineaPig from '../assets/images/guinea-pig-w-girl.jpg';
import Image from 'next/image';
import H1 from '../components/H1';
import { FaExternalLinkAlt } from "react-icons/fa";

const Famille = () => {
    return (
        <main>
            <Container>
                <H1 text="Devenir une famille d'accueil" customClass='text-center'/>
                <section className='section-w-img section-w-img--reverse'>
                    <div className='left_column'>
                        <p>Notre association cherche régulièrement des familles d’accueil pour nos doudous, jusqu’à ce qu’ils soient adoptés.
                            La famille d’accueil met en confiance, parfois apprivoise avec beaucoup de patience, nourrit l'animal accueilli et lui permet de vivre dans de bonnes conditions en attendant une famille définitive.</p>
                        <p>L’association prend en charge les frais vétérinaires ; l'alimentation sèche (foin, granulés, vitamine C, litière), reste à la charge de la famille les végétaux & verdures.</p>
                        <p>La famille d’accueil permet à l’association de placer des animaux en attendant leurs adoptions, elle a un rôle indispensable au sein de l'association.</p>
                        <p>Pour devenir FA, il suffit de remplir ce questionnaire, nous vous recontacterons ensuite dans les plus brefs délais :</p>
                        <Link href="https://docs.google.com/forms/d/1_vw6W0Rd7JOEUr6vUps1mI8r24KTMTvlpKjoAsjPeIA/viewform?fbclid=IwAR1vqrdXflFqWlQVM1llVfcXWTpMYdlkUywLZhORr6PhTGyg5aMNneIFo3s&edit_requested=true" target='_blank' className='btn btn--primary'>Questionnaire <FaExternalLinkAlt /> <span></span></Link>
                    </div>
                    <div className='right_column'>
                        <Image src={GuineaPig} alt="Cochon d'Inde avec une jeune fille" sizes='100vw' style={{width: '100%', height: 'auto'}}/>
                    </div>
                </section>
            </Container>
        </main>
    );
};

export default Famille;