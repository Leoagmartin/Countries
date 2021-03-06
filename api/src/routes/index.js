const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {getCountries,getById, getByQuery, createActivity} = require('../functions');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/countries',(req,res) => {
    let name = req.query.name;
    
    try {
        if(name) {
           
            getByQuery(name).then(query => {
                
                res.status(200).send(query);
            })
        }
        else {

            getCountries().then(resp => {
            res.status(200).json(resp);
        });
            
            
        }
    } catch (error) {
        console.log(error);
    }

    
    

});

router.get('/countries/:id', (req,res) => {
    let param = req.params.id;
    
   try {
       if(param) {
          getById(param).then(resp => {
              
             res.status(200).send(resp)
         }) 
        
       
         
       }
   } catch (error) {
       console.log(error);
   }


});

router.post('/activity', (req,res) => {
    
    try {
        let activity = createActivity(req.body);


         res.status(200).send(activity);

    } catch (error) {
        console.log(error);
    }



   




});



module.exports = router;
