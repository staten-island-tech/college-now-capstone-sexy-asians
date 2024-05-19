const mongoose = require("mongoose");
require("dotenv").config({ path: "variables.env" });

mongoose.connect(
  `mongodb+srv://ryanchen979:nDX32NiFn63!xkX@ryanchen979.cn1pvse.mongodb.net/?retryWrites=true&w=majority&appName=RyanChen979`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
mongoose.connection.on("error", (err) => {
  console.error(`${err.message}`);
});
