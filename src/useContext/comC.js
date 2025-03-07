import React, { useContext } from 'react';
import { propData } from './comA';

export default function ComC() {

    const context = useContext(propData);
    return (
            <h1>
                Hello ComC {context}
            </h1>
    )
}