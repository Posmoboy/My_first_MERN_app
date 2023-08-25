import { Router } from 'express';

const indexRouter = Router();

indexRouter.get('/', (req, res) => {
   res.json({
             status: 'API Works!'
   });
});







export default indexRouter;