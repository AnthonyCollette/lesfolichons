'use client'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Container from './Container';
import slide1 from '../assets/images/slide1.jpg';
import slide2 from '../assets/images/slide2.jpg';
import slide3 from '../assets/images/slide3.jpg';
import Image from 'next/image';

export function HomepageSlider() {

    const responsive = {
        mobile: {
            breakpoint: { max: 9999, min: 0 },
            items: 1,
        }
    };

    return (
        <Carousel responsive={responsive} swipeable draggable infinite autoPlay autoPlaySpeed={5000}>
            <div>
                <Image src={slide1} alt="Cochons d'Inde et un ananas" layout='fill' objectFit='cover' />
                <Container>
                    <h3>Nos missions</h3>
                    <button className='btn btn--primary'>Présentation de l'association <span></span></button>
                </Container>
            </div>
            <div>
                <Image src={slide2} alt="Cochons d'Inde et un ananas" layout='fill' objectFit='cover' />
                <Container>
                    <h3>Nos chons à l'adoption</h3>
                    <button className='btn btn--primary'>Adoptez un de nos protégés <span></span></button>
                </Container>
            </div>
            <div>
                <Image src={slide3} alt="Cochons d'Inde et un ananas" layout='fill' objectFit='cover' />
                <Container>
                    <h3>Faire un don</h3>
                    <button className='btn btn--primary'>Nous aider <span></span></button>
                </Container>
            </div>
        </Carousel>
    )
}


export default HomepageSlider;