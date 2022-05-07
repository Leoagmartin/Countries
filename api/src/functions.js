const axios = require('axios');

function getCountries() {
   
   let data = axios.get('https://restcountries.com/v3.1/all').then((resp) => {
       return resp.data.map(e => {
           return {
               name: e.name.common,
               image: e.flags.svg,
               continent: e.continents,
               code: e.cca3,
               capital: e.capital,
               subRegion: e.subregion,
               area: e.area,
               population: e.population,
               

           }
       });

    });

   
    
    return data;
};


function getById(id) {
    let data = axios.get(`https://restcountries.com/v3.1/alpha/${id}`).then(resp => {
        return resp.data;

   });
   return data;
};

function getByQuery(name) {
    let data = axios.get(`https://restcountries.com/v3.1/name/${name}`).then(resp => {
        return resp.data;

    });

    return data;
};

function createActivity(data) {


};


module.exports = {
    getCountries,
    getById,
    getByQuery,
    createActivity,

};