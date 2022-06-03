import {GET_ALL,DETAIL,ORDERED,FILTER,CREATE,SEARCH, SELECT_ACTIVITIES, CLEAR, SELECT_ACTIV } from '../actions/index'


const initialState = {
    countries: [],
    allCountries: [],
    detail: {},
    filter: [],
    create: {},
    countrySearched: [],
    activities: [],
    activCountry: "",
    countriesWithAct: [],
    selectActiv: [],
    order: [],
};


export default function reducer(state = initialState,action) {
    switch (action.type) {
        case GET_ALL:

            let acti = [];
            let name = [];

            action.payload.map(e => e.activities.map(el => {
              if(!acti.includes(el.name)) acti.push(el.name);
            }));
            

            name = action.payload.map( e => { 
               return {
                   ...e,
                activities: e.activities.map(element => element.name)} })

            return {
                ...state,
                countries: action.payload,
                allCountries: action.payload,
                activities: acti,
                countriesWithAct: name,
            }
            
        case DETAIL: 
            return{
                ...state,
                detail: action.payload,
            }
          
        case ORDERED: 
            let orderedCountries = [];
            
            if(action.payload === "ASC"){
               orderedCountries = state.countries.sort((a,b) => {
                   if(a.name < b.name) return -1;
                   else if(a.name > b.name) return 1;
                   else return 0;
               });
            }
            else if(action.payload === "DESC") {
                orderedCountries = state.countries.sort((a,b) => {
                    if(a.name > b.name) return -1;
                    else if(a.name < b.name) return 1;
                    else return 0;
                });

            }
            else if (action.payload === 'PMIN') {
                orderedCountries = state.countries.sort((a,b) => {
                   return a.population - b.population
                })

            }
            else if (action.payload === 'PMAX') {
                orderedCountries = state.countries.sort((a,b) => {
                   return b.population - a.population;
                })

            }
            else orderedCountries = state.allCountries;

            
            
            return{
                ...state,
                countries: orderedCountries.slice(0),

            }

         case FILTER: 
            
            let filtered = state.allCountries;
            
            
            if(action.payload !== "select")  {
            
            filtered = filtered.filter(e => e.continent.trim() === action.payload);
           
            }
            else filtered = state.allCountries;
            
            
            
            return{
                ...state,
                countries: filtered,
            }

         case CREATE: 
            return{
                ...state,
            }

        case SEARCH:
            let searched = [];
           
            if(action.payload.length >= 1) searched = action.payload;
            else {
                searched = state.allCountries;
                alert("No se encontro ningun pais");
            }
            
            return{
                ...state,
                countries: searched,
            }

        case SELECT_ACTIVITIES:
            return{
                ...state,

            }
        case CLEAR:
            return {
                ...state,
                detail: {},
            }
        case SELECT_ACTIV:
            let act = state.countriesWithAct;

            if(action.payload !== "select")  {
                act = act.filter(e => e.activities.includes(action.payload))
                
                }
             else act= state.allCountries;
            

            return{
                ...state,
                countries: act,
                
            }


        default:
            return state
            
    }



    
};