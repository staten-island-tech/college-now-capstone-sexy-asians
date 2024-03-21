const mongoose = require("mongoose");
require("dotenv").config({ path: "variables.env" });

mongoose.connect(
  `mongodb+srv://dannywchen3:dannychen@cluster0.kgybcd4.mongodb.net/`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
mongoose.connection.on("error", (err) => {
  console.error(`${err.message}`);
});
