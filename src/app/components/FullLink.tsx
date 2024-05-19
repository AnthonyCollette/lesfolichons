import Link from 'next/link';
import React from 'react';

const FullLink = ({link} : {link: string}) => {
    return (
        <Link href={link} className='full-link'>
            
        </Link>
    );
};

export default FullLink;