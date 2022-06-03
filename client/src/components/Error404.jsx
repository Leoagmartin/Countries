import {Link} from 'react-router-dom';
import im from '../icons/404.png'
import home from '../icons/home.png'
import s from './error404.module.css'

export default function Error404(){
    return <div className={s.container}>
        <Link to="/home"><img className={s.back} src={home} alt="home"></img></Link>
        <div className={s.page}>
            <h3>Somehing is missing...</h3>
            <img src={im} alt="Error"></img>
        </div>


    </div>



};