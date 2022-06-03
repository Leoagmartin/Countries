import React from "react";
import linkedin from '../icons/linkedin.png'
import github from '../icons/github.png'
import s from './footer.module.css';

export default function Footer() {
  
        return <div className={s.container}>
            <a href="https://linkedin.com/in/leonardo-martin-aguirre-61a085a1" className={s.links} ><img src={linkedin} alt='Linkedin'></img></a>
            
            <a href="https://github.com/Leoagmartin"  className={s.links}><img src={github} alt='Github'></img> </a>
        
        
        </div>

};