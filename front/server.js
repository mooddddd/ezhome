const express = require("express");
const nunjucks = require("nunjucks");
const axios = require("axios");
const app = express();

const request = axios.create({
  baseURL: "http://127.0.0.1:3000",
  withCredentials: true,
});

app.set("view engine", "html");
nunjucks.configure("views", { express: app });
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.use((req, res, next) => {
//   try {
//     const { token } = req.cookies;
//     const [header, payload, signature] = token.split(".");

//     const pl = JSON.parse(Buffer.from(payload, "base64").toString("utf-8"));
//     req.user = pl;
//   } catch (e) {
//   } finally {
//     next();
//   }
// });

app.get("/", (req, res) => {
  res.render("index.html");
});

app.get("/signup", (req, res) => {
  res.render("signup.html");
});

app.get("/login", (req, res) => {
  res.render("login.html");
});

app.post("/login", async (req, res) => {
  const response = await request.post("/auth", { ...req.body });
});

app.listen(3005, () => {
  console.log(`front server strat! PORT : 3005`);
});
