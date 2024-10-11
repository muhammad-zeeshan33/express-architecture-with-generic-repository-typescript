import express, { Application }  from 'express';
import config from './loadEnv';
import connectDB from './connection/db'
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import logger from './logger';

import routes from './routes/index'

const app: Application = express();

connectDB();

app.use(morgan('combined', {
  stream: {
    write: (message: string) => logger.info(message.trim())
  }
}));

app.use(bodyParser.json());
app.use(cors())

const PORT = config.PORT || 3000;

app.get('/', (req, res)=> {
  res.send("Hello from express app");
})
app.use('/api', routes);

app.use((req, res, next) => {
  console.log(`Incoming request: ${req.method} ${req.url}`);
  res.status(404).json({ message: 'Route not found' });
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
``
