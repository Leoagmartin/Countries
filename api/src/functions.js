const axios = require('axios');
const {Country, Activity} = require('./db');

function getCountries() {
   
   let data = axios.get('https://restcountries.com/v3.1/all').then((resp) => {
          return resp.data.map(e => {
            Country.findOrCreate({
               where: {id: e.cca3},
               defaults: {
               name: e.name.common,
               image: e.flags.svg,
               continent: e.region,
               id: e.cca3,
               capital: e.capital?e.capital[0]:"The country does not have a capital",
               subregion: e.subregion,
               area: e.area,
               population: e.population,
               }

           })

       });

    });

    const countries =   Country.findAll({
        include: Activity
    }).then(resp => {
        
        return resp;
    })

    
    return countries;
};


function getById(id) {
    /* let data = axios.get(`https://restcountries.com/v3.1/alpha/${id}`).then(resp => {
        return resp.data;

   });



   return data; */




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