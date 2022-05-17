import s from './landing.module.css';
import {Link} from 'react-router-dom';
import React from 'react';



export default function Landing() {


        
    return <div className={s.container}>
        <h2 className={s.title}>WELCOME TO MY COUNTRIES PAGE</h2>


        <Link className={s.link} to='/home'>Enter</Link>
    
    </div>

    
};