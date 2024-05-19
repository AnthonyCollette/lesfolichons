import React from 'react';
import { Delius_Swash_Caps } from "next/font/google";

const delius = Delius_Swash_Caps({ subsets: ["latin"], weight: ['400'] });

const H1 = ({ text, customClass }: { text: string, customClass?: string }) => {

    return (
        <h1 className={delius.className + ' ' + customClass}>
            {text}
        </h1>
    );
};

export default H1;