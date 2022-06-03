import React from "react";
import s from './country.module.css';
import {Link} from 'react-router-dom';


export default function Country({name,image,continent,id}) {

        return <div className={s.container} >
          
            <div className={s.front} style={{backgroundImage: `url(${image})`}}>
                
                <div className={s.frontDiv}>
                   <h2>{name}</h2>
                    <h4>{continent}</h4>
                </div>
            </div>

            <div className={s.back}>
                <h2>{name}</h2>
                <Link to={`${id}`} className={s.detail}>Detail</Link>
            </div>
           
        </div>


    


};
