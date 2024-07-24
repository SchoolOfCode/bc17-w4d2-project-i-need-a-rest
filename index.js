import express from "express";
import helmet from "helmet";
import { generateActivities, createNewActivity, getAllActivities} from "./activities.js";

const app = express();
const port = process.env.PORT || 3000;

app.disable("x-powered-by");

app.use(helmet());

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/activities", async (req, res) => {
  res.status(200);
  res.json({
    success: true,
    payload: await getAllActivities(3),
  });
});

app.listen(port, () => {
  console.log("Server up and running");
});

app.post("/activities", async (req, res) => {
  if (req.body.activity_type && req.body.activity_duration) {
    await createNewActivity(req.body.activity_type, req.body.activity_duration);
    res.status(201);
    res.json({
      success: true,
      payload: await getAllActivities()}
    )
  } else {
    res.status(400);
    res.json({
      success: false,
      payload: "Please provide activity_type and activity_duration"}
    )
  }
});



app.put('/activities/:id',(req,res)=>{
  if(req.params.id){
    
  }
})




