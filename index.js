import express from 'express';
import helmet from 'helmet';
import { generateActivities } from './activities.js'

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

app.get('/activities', (req, res) => {
  res.status(200);
	res.json(generateActivities(3));

});
app.listen(port, () => {
  console.log('Server up and running');
});




