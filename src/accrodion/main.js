import React, { useState } from 'react';

import { data } from './data';
import Accordion from './accordion';
import './main.css'

export default function MainAccordion(){
    const [accor, setAccor] = useState(data);
    
    return (
        <section id='main'>
           {
            accor.map((curElement) => {
                return <Accordion  key={curElement.id} {...curElement}/>
            })
           }
        </section>
    )
}