import {useDispatch,useSelector} from 'react-redux';
import {create, getAll} from '../store/actions/index';
import {Link ,useNavigate} from 'react-router-dom';
import {useEffect,useState} from 'react';
import s from './create.module.css';
import back from '../icons/back.png';

export default function Create(){
    let dispatch = useDispatch();
    let countries = useSelector(state => state.countries);
    let activities = useSelector(state => state.activities);
    const navigate = useNavigate();


    useEffect(() => {
        dispatch(getAll());

    },[dispatch])

    
    
    countries = countries.map(e => e.name);

    
     const [countriesSelected, setCountry] = useState([]);
     const [data, setData] = useState({
        name: "",
        difficulty: 1,
        duration: "", 
        season: "Spring",
        countries: [],
        });

        
    const [errores, setError] = useState({
            name: "",
            duration: "",
            countries: "",
            exists: "",

    });

    const handleChange = (e) => {
        let aux = e.target.value;

        if(e.target.name === "name") {
          aux =  aux.charAt(0).toUpperCase() + aux.slice(1);
        }


        setData({
            ...data,
            [e.target.name]: aux,
        })

        
    };


    const handleSubmit = () => {
        
        let all = {...data,countries: countriesSelected};
       
        dispatch(create(all));
        alert("Activity Creada!!!!!");
        navigate("/home");

    };

    const deleteOption = (e) => {
        let name = e.target.name;
        e.preventDefault();
        let aux = countriesSelected.filter(e => e !== name);
        setCountry(aux);

     
    };
    
    const handleSelect = (e) => {
        
        if(!countriesSelected.includes(e.target.value)) {
            setCountry([...countriesSelected,e.target.value]);

        }

    };
    
    const regex = {
        name: /[a-z]+$/,
        number : /^[1-9]$/,

    };


    const validate = (e) => {
        e.preventDefault();

        let aux = {
            name: "",
            duration: "",
            countries: "",
            exists: "",
        }

        
        if(regex.name.test(data.name) && regex.number.test(data.duration) && countriesSelected.length> 0 && !activities.includes(data.name)) {


            handleSubmit();
        }
        else if(!regex.name.test(data.name) ) aux.name = "Campo NAME incorrecto, solo acepta palabras minusculas";
        if(!regex.number.test(data.duration)) aux.duration = "Campo DURATION incorrecto, solo acepta numeros y menos de 10 Horas";
        if(countriesSelected.length === 0) aux.countries = "Campo COUNTRIES incorrecto, debe seleccionar al menos uno";
        if(activities.includes(data.name)) aux.exists = "Ya existe la actividad con ese nombre";


        setError(aux);
       
      

    };

    return <div className={s.container}>
        <Link to='/home' className={s.link}><img src={back} alt="back"></img></Link>
        <form className={s.form}>

            <h2>Create an Activity</h2>

            <div className={s.subContainer}>
              <div>
                <label >Name: </label>
                <input onChange={handleChange} type='text' placeholder="Type a Name" name="name"></input>
              </div>
            <div>
                   <label>Difficulty: </label>
                  <select onChange={handleChange} name="difficulty">
                        <option value='1' >1</option>
                        <option value='2' >2</option>
                        <option value='3' >3</option>
                        <option value='4' >4</option>
                        <option value='5' >5</option>
                  </select>
             </div>
             <div>
                <label>Duration: </label>
                <input onChange={handleChange} type='text' placeholder="Type a Duration" name="duration"></input>
                <label>Hours</label>
            </div>
            <div>
            <label>Season: </label>
                <select onChange={handleChange} name="season">
                <option value="Spring" >Spring</option>
                <option value="Summer" >Summer</option>
                <option value="Autumn" >Autumn</option>
                <option value="Winter" >Winter</option>
                </select>
            </div>
            <div>
                <label>Select a Country</label>
                <select  name="country" onChange={handleSelect} >{countries.map(e => <option key={e} value={e}>{e}</option>)}</select>
            </div>
            </div>

            <div className={s.containerBtn}>
            {countriesSelected.map(e => <button name={e} key={e} onClick={deleteOption}>{e}</button>)}
           </div>
            <div>
              <button className={s.send} onClick={validate}>Send</button>
            </div>


            {<p>{errores.name}</p>}
            {<p>{errores.duration}</p>}
            {<p>{errores.countries}</p>}
            {<p>{errores.exists}</p>}
        </form>
    </div>



};