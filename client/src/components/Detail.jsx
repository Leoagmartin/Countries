import {detail} from '../store/actions/index'
import {useDispatch,useSelector} from 'react-redux';
import {useParams,Link} from 'react-router-dom';
import {useEffect} from 'react';
import s from './detail.module.css'
import back from '../icons/back.png'

export default function Detail(){
    let dispatch = useDispatch();
    let detailCountry = useSelector(state => state.detail);
    let {id} = useParams();
   

    

    useEffect(() => {
        dispatch(detail(id));
    },[dispatch,id])

 
    return <div className={s.container}>
        <div>
        <Link to='/home' className={s.link} onClick={() => dispatch(detail())}><img className={s.back} src={back} alt="back"></img></Link>
        </div>
        
        <div className={s.detail} style={{backgroundImage: `url(${detailCountry.image})`}}>
        <div className={s.background}>

        <img className={s.flag} src={detailCountry.image} alt="Flag"></img>
        
        <div className={s.info}>

        <div> ID: {detailCountry.id}</div>
        <div>NAME: {detailCountry.name}</div>
        <div> CONTINENT: {detailCountry.continent}</div>
        <div> CAPITAL: {detailCountry.capital}</div>
        <div> SUBREGION: {detailCountry.subregion}</div>
        <div> POPULATION: {detailCountry.population}</div>
        <div> AREA: {detailCountry.area + " Km2"}</div>
        <div> ACTIVITIES: {detailCountry.activities ? detailCountry.activities.map(e => e.name + ", ") : ""}</div>
            </div>
        </div>

        </div>


        
    </div>


};