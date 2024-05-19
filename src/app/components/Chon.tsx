import Image from 'next/image';
import React from 'react';
import FullLink from './FullLink';

type Props = {
    title?: string,
    image?: any
}

const Chon = ({ title, image }: Props) => {

    const displayImage = () => {
        if (image !== undefined && title !== undefined) {
            return <Image src={image} alt={title} sizes='100vw' style={{ width: '100%', height: 'auto' }} />
        }
    }

    return (
        <article className='chon'>
            <div className='overlay'>
                <FullLink link='/' />
                <h3>{title}</h3>
            </div>
            {displayImage()}
        </article>
    );
};

export default Chon;