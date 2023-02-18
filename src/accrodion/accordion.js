import React, {useState} from 'react';

export default function Accordion(props){
    const [show, setShow] = useState(false)
    return(
        <section>
            <article>
                <p onClick={() => {setShow(!show)}}>{show ? "➖": "➕"}</p>
                <h3>{props.keyy}</h3>
            </article>
            
            <p>{show && props.value}</p>
        </section>
    )
}