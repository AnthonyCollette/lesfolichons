import Image from 'next/image';
import React from 'react';
import FullLink from './FullLink';

type Props = {
    title: string,
    image: string,
    id: number,
}

const Chon = ({ title, image, id }: Props) => {

    return (
        <article className='chon'>
            <div className='overlay'>
                <FullLink link={`/chons/${id}`} />
                <h3>{title}</h3>
            </div>
            {image && <Image src={image} alt={title} width='400' height='400' sizes='100vw' style={{ width: '100%', height: 'auto' }} />}
        </article>
    );
};

export default Chon;