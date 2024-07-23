import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.use((req, res, next) => {
	console.log(`${req.method} ${req.url}`);
  next();
});

app.get('/', (req, res) => {
  res.send('Hello World');
})

app.listen(port, ()=> {
  console.log('Server up and running');
})





