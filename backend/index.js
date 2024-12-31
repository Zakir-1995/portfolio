
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import contactRouter from './routes/contactRoute.js'
import blogRouter from './routes/blogRoute.js'
dotenv.config();
const app = express();

app.use(express.json({ limit: "50mb" }));

const whitelist = ["http://localhost:5173"];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("CORS ERROR"));
    }
  },
  allowedHeaders: [
    "Access-Control-Request-Method",
    "Access-Control-Request-Headers",
    "Access-Control-Allow-Methods",
    "Access-Control-Allow-Credentials",
    "Access-Control-Allow-Headers",
    "Access-Control-Allow-Origin",
    "Origin",
    "X-Requested-With",
    "Content-Type",
    "Accept",
    "Authorization",
    "X-HTTP-Method-Override",
    "Set-Cookie",
    "Cookie",
    "Request",
    "withCredentials",
  ],
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "HEAD", "OPTIONS"],
  credentials: true,
  optionsSuccessStatus: 200,
  origin: ["http://localhost:5173"],
};

app.use(cors(corsOptions));

// connect DB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Mongodb Connected");
  })
  .catch((err) => {
    console.log(err.message);
  });

// routes
app.use("/api/contact", contactRouter);
app.use("/api/blog", blogRouter);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

