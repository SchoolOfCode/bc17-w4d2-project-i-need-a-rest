import express from "express";
import helmet from "helmet";
import {
  generateActivities,
  createNewActivity,
  getAllActivities,
} from "./activities.js";
import { deleteDb, replaceDb } from "./database.js";
import {
  check,
  param,
  checkExact,
  matchedData,
  validationResult,
  body,
} from "express-validator";

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

app.post(
  "/activities",
  check("activity_type").notEmpty(),
  check("activity_duration").notEmpty(),
  checkExact([], {
    message: "Only activity type and activity duration are allowed",
  }),
  async (req, res) => {
    let err = validationResult(req);
    let data = matchedData(req);

    if (err.isEmpty()) {
      await createNewActivity(data.activity_type, data.activity_duration);
      res.status(201);
      res.json({
        success: true,
        payload: await getAllActivities(),
      });
    } else {
      res.status(400);
      res.json({
        success: false,
        payload: checkedResult.array(),
      });
    }
  }
);

app.put(
  "/activities/:id?",
	body().exists(),
  check("id").exists().notEmpty(),
  check("activity_type").notEmpty(),
  check("activity_duration").notEmpty(),
  checkExact([], { message: "Only id, activity type, duration allowed" }),
  async (req, res) => {
    let err = validationResult(req);
    let data = matchedData(req);

    if (checkedResult.isEmpty() && Object.keys(req.body).length !== 0) {
      let result = await replaceDb(data.id, req.body);

      res.status(200);
      res.json({
        success: true,
        payload: result,
      });
    } else {
      res.status(400);
      res.json({
        success: false,
        payload: "Request body is required, with activity_type and activity_duration fields",
      });
    }
  }
);

app.delete("/activities/:id?", 
deleteAuth,
check("id").exists().notEmpty().withMessage("ID Parameter is required"),
async (req, res) => {
  let err = validationResult(req);
	let data = matchedData(req);

  if (err.isEmpty()) {
    let deletedItem = await deleteDb(data.id);
		
    res.status(200).json({
      success: true,
      payload: deletedItem,
    });
  } else {
    res.status(400).json({
      success: false,
      payload: "Please give an appropriate id",
    });
  }
});

app.get("/activities", async (req, res) => {
  res.status(200);
  res.json({
    success: true,
    payload: await getAllActivities(),
  });
});

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.listen(port, () => {
  console.log("Server up and running");
});

function deleteAuth(req, res, next) {
  if (req.headers.authorization === "Bearer TEST_TOKEN"){
    next();
  } else {
    res.status(401).json({
      success: false,
      payload: "Unauthorized",
    });
}}