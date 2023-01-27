const express = require("express");
const cors = require("cors");
const cookieParse = require("cookie-parser");
const app = express();
const router = require("./route");

app.use(express.json());
app.use(cors({ origin: true, credentials: true }));
app.use(cookieParse());

// app.use(router)

// app.post("/users", upload.single("pofilePic"), (req, res) => {
//   // res.send("upload");
//   console.log(req.body);
//   /*
//    {
//   userId: 'asdf',
//   userPw: 'asdf',
//   userName: 'asdf'
//   }
//    */

//   console.log(req.file); // DB에 저장하는 건 어떻게 불러오느냐에 따라 파일네임으로 할 건지, 패스로 할 건지 정하기?
//   /*
//   {
//   fieldname: 'pofilePic',
//   originalname: '2.png',
//   encoding: '7bit',
//   mimetype: 'image/png',
//   destination: 'uploads/',
//   filename: '2_1674633059042.png',
//   path: 'uploads/2_1674633059042.png',
//   size: 19411
// }
//   */
// });
app.use(router);

app.use((error, req, res, next) => {
  res.status(500).send(error.message);
});

module.exports = app;
