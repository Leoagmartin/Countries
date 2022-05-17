import React from "react";



export default function Paginate( {paginado,pages}){
        let p = [];

        for (let i = 1; i < pages; i++) {
            p.push(i)
            
        }


        return <div>
            {p.map(e => <button onClick={() => paginado(e)}>{e}</button>)}
          
        
        </div>

    



};