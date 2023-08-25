import {Router} from 'express';
import ('../models/cities')


const citiesRouter = Router();

Router.get('/Cities', async (req, res) => {
   
   const cities = await Cities.find();
   console.log(cities);
   res.json(cities);    
        
});

Router.get('/Cities:id', async (req, res) => {
   const getOneCity = await Cities.findById(req.params.id);
   res.json(getOneCity);
        
 });
    
Router.post('/Cities', async (req, res) => {
    const {img, name, country, population, currency, tourist_spots} = req.body;
    new city = new City ({img, name, country, population, currency, tourist_spots});
    await city.save();
    res.json({status: 'City Saved'});
   
 });

 Router.put('/Cities/:id', async (req, res) => {
    const {img, name, country, population, currency, tourist_spots} = req.body;
    const newCity = {img, name, country, population, currency, tourist_spots};
    await City.findByIdAndUpdate(req.params.id, newCity);
    res.json({status: 'City Updated'});
    });

    Router.delete('/Cities/:id', async (req, res) => {
        await City.findByIdAndRemove(req.params.id);
        res.json({status: 'City Deleted'});
        });
    
     


/*anidamiento de las rutas*/
// indexRouter.get("/", getAllCities)

// indexRouter.get("/:id", getOneCity)

export default citiesRouter;