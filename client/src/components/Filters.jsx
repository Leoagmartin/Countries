
import {useDispatch,useSelector} from 'react-redux';
import {ordered,filter,selectActiv} from '../store/actions';
import s from './filters.module.css';

export default function Filters({paginado}) {
    let activities = useSelector(state => state.activities);
    let dispatch = useDispatch();

    const changeOrder = (e) => {
        
        dispatch(ordered(e.target.value));
        paginado(0);

    }
    const selectContinent = (e) => {
        
        dispatch(filter(e.target.value));
        paginado(0);

    };

    const selectA = (e) =>{
        dispatch(selectActiv(e.target.value));
        paginado(0);

    };
  
    return <div>
        <div className={s.page}>
        <label>Filter By: </label>
        <div>
          <label>Continent: </label>
           <select onChange={selectContinent}>
               <option value='select'>--Select--</option>
               <option value='Africa'>Africa</option>
               <option value='Antarctic'>Antartic</option>
               <option value='Americas'>Americas</option>
               <option value='Asia'>Asia</option>
               <option value='Europe' >Europe</option>
               <option value='Oceania'>Oceania</option>
           </select>
           <label>Activities: </label>
           <select onChange={selectA}>
                <option value="select">--Select--</option>
               {activities.map(e => <option key={e} value={e} >{e}</option>)}
           </select>
          
        </div>

        </div>
        
        <div className={s.page} >
            <label className={s.order}>Order By:</label>
                <select onChange={changeOrder}>
                    <option>--Select--</option>
                    <option value="ASC">ASC</option>
                    <option value="DESC" >DESC</option>
                    <option value="PMIN" >POPULATION MIN</option>
                    <option value="PMAX" >POPULATION MAX</option>
                </select>
                
        
        </div>

    
    </div>


};