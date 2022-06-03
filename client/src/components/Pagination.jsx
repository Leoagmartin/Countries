import React from "react";
import s from './pagination.module.css';


export default function Paginate( {paginado,pages,currentPage}){
        let p = [];

        for (let i = 0; i < pages; i++) {
            p.push(i)
            
        }
       

        return <div className={s.container}>
            {p.map(e => <button onClick={() => paginado(e)} className={currentPage === e ? s.selected : s.btn}  key={e}>{e+1} </button>)}
          
        
        </div>

    



};