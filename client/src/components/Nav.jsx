import React from "react";
import {Link} from 'react-router-dom';
export default function Nav() {
    
        return <div>


            <Link to='/create'>NEW ACTIVITY</Link>
            <div>
            <input type='text' placeholder='Search a Country' ></input>
            <button>Search</button>
            </div>
        
        </div>


    



};