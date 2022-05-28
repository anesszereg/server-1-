const express = require("express");
const mongoose = require("mongoose");
const app = express();
const UserRouter =require('./routes/User.Routes')
const bodyParser = require("body-parser");

app.get("/", function (req, res) {
//  res.send({req});
});

// Bodyparser middleware

//   app.use(bodyParser.json());
//   app.use(
//     bodyParser.urlencoded({
//       extended: false
//     })
//   );

// import router


// connect to database

mongoose
  .connect("mongodb://localhost:27017/API-EXO", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected to database successfully ");
  })
  .catch((err) => {
    console.log("error to connect to data bass" + err);
  });

// port of the server
 app.use(express.json());
 app.use("/api/users", UserRouter);
const port = 4001;

app.listen(port, () => {
  console.log(`server started on port ${port}  with nodemon`);
});
