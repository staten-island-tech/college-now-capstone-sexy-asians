const express = require("express"); // this file requires express
const port = process.env.PORT || 4000; // use external server port or local 3000
const app = express(); // instantiate express
require("./DB/mongoose"); // ensures mongoose connects and runs
const routes = require("./Routes/index");
const cors = require("cors");
let corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

const multer = require("multer");
const upload = multer({ dest: "uploads/" });

//takes the raw requests and turns them into usable properties on req.body
app.use(express.json());
app.use(express.urlencoded());

app.use("/", routes);
app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
