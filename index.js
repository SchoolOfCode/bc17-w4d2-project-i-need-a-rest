import express from 'express';

const app = express();
const port = process.env.PORT || 3000;


app.get('/', (req,res) => {
    res.send('Hello World');
    console.log(`${req.method} ${req.originalUrl}`);
})

app.listen(port, ()=> {
    console.log('Server up and running');
})





