import s from './landing.module.css';
import {Link} from 'react-router-dom';
import React from 'react';



export default function Landing() {


        
    return <div className={s.container}>
        <span className={s.title}>WELCOME TO MY COUNTRIES PAGE</span>


        <Link className={s.link} to='/home'>Enter</Link>
    
    </div>

    
};