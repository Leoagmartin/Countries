import React, {useEffect, useState} from "react";
import Country from "./Country";
import Nav from "./Nav";
import Pagination from './Pagination';
import Filters from "./Filters";
import s from './home.module.css';
import Footer from "./Footer";
import {useSelector,useDispatch} from 'react-redux';
import  {getAll} from '../store/actions/index';


function Home(){

const dispatch = useDispatch();
let countries = useSelector(state => state.countries);



let pages = Math.ceil(countries.length / 9);
const [pageSelected,setPage] = useState(0);
const index = pageSelected * 9;
const lastIndex = index + 9;
const countriesPage = countries.slice(index,lastIndex);


const paginado = (number) => {
    setPage(number);

};

useEffect(() => {
  dispatch(getAll());

},[]);




        return <div className={s.container}>
            <Nav/>
            <Filters></Filters>
            <Pagination paginado={paginado} pages={pages} />
            
            <div className={s.grid}>
            {countriesPage.map(e => {
              return  <Country key={e.id} id={e.id} name={e.name} image={e.image} continent={e.continent}/>

            })}
            </div>
            <Footer></Footer>
            </div>

    };




export default Home;