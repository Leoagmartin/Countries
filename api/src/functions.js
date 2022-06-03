const axios = require('axios');
const {Country, Activity} = require('./db');
const {Op} =require('sequelize');

function getCountries() {
   
   axios.get('https://restcountries.com/v3.1/all').then((resp) => {
          return resp.data.map(e => {
            Country.findOrCreate({
               where: {id: e.cca3},
               defaults: {
               name: e.name.common,
               image: e.flags.svg,
               continent: e.region,
               id: e.cca3,
               capital: e.capital?e.capital[0]:"The country does not have a capital",
               subregion: e.subregion ? e.subregion : "The Country does not have a subregion",
               area: e.area,
               population: e.population,
               }

           })

       });

    });

    const countries =   Country.findAll({
        include: {
            model: Activity,
        }


    }).then(resp => {
        
        return resp;
    })

    
    return countries;
};


function getById(id) {
  
   let algo = Country.findByPk(id,{include: Activity}).then(resp => resp);



    return algo;
    /* let data = axios.get(`https://restcountries.com/v3.1/alpha/${id}`).then(resp => {
        return resp.data;

   });



   return data; */




};

async function getByQuery(name) {

    const getCountryByName = await Country.findAll({
        where: {
             name: {
                [Op.like]: `%${name}%`,
            } 
           
        }
    }).then(r => {
        return r;
    });


    return getCountryByName;
    
/*     let data = axios.get(`https://restcountries.com/v3.1/name/${name}`).then(resp => {
        return resp.data.map(e => {
           return { 
               name: e.name.common,
               image: e.flags.svg,
               continent: e.region,
               id: e.cca3,
               capital: e.capital?e.capital[0]:"The country does not have a capital",
               subregion: e.subregion ? e.subregion : "The Country does not have a subregion",
               area: e.area,
               population: e.population,
            
            
            };

        });
       
    });
    
    
    return data; */
};

async function createActivity({name,difficulty,duration,season,countries}) {
   

    try {
        let newActivity = await Activity.create({
            name,
            duration,
            season,
            difficulty,
                
        });    

        countries.map(async e => {
            
            const country = await Country.findOne({
                where: {
                    name: e,
                }

            });

            newActivity.addCountry(country);

        })
        
    } catch (error) {
        console.log(error);
    }

    return "The Activity was succeful created"
/*     let paises = await Country.findOne({
        where: {
            name: countries,
        }
    })

    creacion.addCountry(paises); */


   /*  let data = Activity.findAll({}).then(resp => resp);
    
    
    return data; */
};


module.exports = {
    getCountries,
    getById,
    getByQuery,
    createActivity,

};