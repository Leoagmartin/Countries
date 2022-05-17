import React from "react";
import s from './country.module.css'


export default function Country({name,image,continent}) {

        return <div className={s.container} style={{backgroundImage: `url(${image})`}}>
            
            <h3 className={s.title}>{name}</h3>
            <h5>{continent}</h5>
            
            
        </div>


    


};
