import React from 'react';
import Container from '../components/Container';
import Chon from '../components/Chon';
import H1 from '../components/H1';
import kc from '../assets/images/kinder-clochette.png';
import jojo from '../assets/images/jojo.png';
import cc from '../assets/images/caramel-citrouille.png';
import gp from '../assets/images/gus-pippo.png';

const Chons = () => {

    const chons = [{
        title: 'Kinder & Clochette',
        image: kc,
    }, {
        title: 'Jojo',
        image: jojo,
    }, {
        title: 'Caramel & Citrouille',
        image: cc,
    }, {
        title: 'Gus & Pippo',
        image: gp
    }]

    return (
        <main>
            <Container>
                <section>
                    <H1 text="Les chons à adopter" customClass='text-center' />
                    <ul className='chons-list'>
                        {chons.map((chon, index) => {
                            return <Chon key={index} title={chon.title} image={chon.image} />
                        })}
                    </ul>
                </section>
            </Container>
        </main>
    );
};

export default Chons;