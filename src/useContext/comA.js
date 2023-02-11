import React, { createContext } from 'react';
import ComB from './comB';

const propData = createContext();

export default function ComA(){
    return(
        <propData.Provider value = {"XYZ_ABC"}>
            <ComB/>
        </propData.Provider>
    )
}

export {propData};