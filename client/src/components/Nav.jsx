import React, { useState } from "react";
import {Link} from 'react-router-dom';
import {search} from '../store/actions/index';
import {useDispatch} from 'react-redux';
import s from './nav.module.css';
import find from '../icons/flag.png'

export default function Nav({paginado}) {
        let dispatch = useDispatch();

        const [country,setCountry] = useState("");
        const [error,setError] = useState("");

        const validate = /^[a-zA-Z]+$/;

        const findCountry = () => {
            if(country === "") setError("-No se permite el campo vacio");
            else if (!validate.test(country)) setError("-Solo se permiten letras");
            else if(validate.test(country)){
                let aux = country.toLowerCase();
                 aux = aux[0].toUpperCase() + aux.slice(1);
                setError("");
                
                dispatch(search(aux));
                paginado(0);
                setCountry("");
            }

        };

        const handleChange = (e) => {
 
            setCountry(e.target.value);


        };
    
        return <div className={s.container}>


            <Link to='/create' className={s.link}>NEW ACTIVITY</Link>
            <div className={s.search}>
            <input onChange={handleChange} type='text' placeholder='Search a Country' value={country} autoComplete="off"></input>
            <button onClick={findCountry}><img src={find} alt="Search" ></img></button>
            <p>{error}</p>
            </div>
        
        </div>


    



};