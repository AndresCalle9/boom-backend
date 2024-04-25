import express, { Request, Response } from 'express';
const cors = require('cors');
import {connect} from './config/database/mongodb';
import { errorHandler } from './config/middlewares/error-handler-middleware';
import 'express-async-errors';
import productRoutes from './config/routes/products.route'

require('dotenv').config();

// Express initialization
const app = express();
const port = process.env.PORT ?? 3000;

// Database connect
(async () => {
  await connect();
})();

// Middlewares
app.use(errorHandler);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/health', (req: Request, res: Response) => {
    res.send({message:'Hello, Storage services is working'});
  });

// Project dependencies

// Routes
app.use(`${process.env.API_VERSION_ROUTE}`, productRoutes);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });

export default app;