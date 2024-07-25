import express from "express";
import helmet from "helmet";
import {
  generateActivities,
  createNewActivity,
  getAllActivities,
} from "./activities.js";
import { deleteDb, replaceDb } from "./database.js";

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
      payload: await getAllActivities(),
    });
  } else {
    res.status(400);
    res.json({
      success: false,
      payload: "Please provide activity_type and activity_duration",
    });
  }
});

app.put("/activities/:id", async (req, res) => {
  try {
    let result = await replaceDb(req.params.id, req.body);
    res.status(200);
    res.json({
      success: true,
      payload: result,
    });
  } catch (err) {
    console.log(err);
    res.status(400);
    res.json({
      success: false,
      payload: "Please give an appropriate id and body",
    });
  }
});




app.delete("/activities/:id", async (req,res)=>{
  try{
    let deletedItem= await deleteDb(req.params.id)
    res.status(200).json(
      {
        success: true,
        payload: deletedItem,
      }
    )
  }
  catch (error){
    res.status(400).json(
      {
        success: false,
        payload: 'Please give an appropriate id',
      }
    )
  }
})




