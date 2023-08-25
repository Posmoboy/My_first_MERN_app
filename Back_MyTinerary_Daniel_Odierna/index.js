import ('dotenv/config.js')
import express from 'express';
import morgan from 'morgan';
import indexRouter from './src/app/route/indexRouter.js';
import './database.js'








//Settings

const app = express();
const port = 5173;
app.set('port', process.env.port || 5173);



//Midlewares
app.use(morgan('dev'));
app.use(express.json());



//Routes
app.use((indexRouter));

//Static files

//starting the server

app.listen(app.get('port'), () => {
    console.log('Server on port 5173');
});