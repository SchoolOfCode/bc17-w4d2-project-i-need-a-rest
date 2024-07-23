import express from 'express';
import helmet from 'helmet';

const app = express();
const port = process.env.PORT || 3000;

app.disable("x-powered-by");

app.use(helmet());

app.use((req, res, next) => {
	console.log(`${req.method} ${req.url}`);
  next();
});

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(port, () => {
  console.log('Server up and running');
});





