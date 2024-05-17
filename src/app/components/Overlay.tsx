import React from 'react';

const Overlay = ({children} : any) => {
    return (
        <div className='overlay'>
            {children}
        </div>
    );
};

export default Overlay;