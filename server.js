import app from "./app.js";
import config from "./config/config.js";
import mongoose from "mongoose";

const { port, db_local } = config;

mongoose.set('useFindAndModify', false);
mongoose
  .connect(db_local, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => {
    app.listen(port, () => console.log(`express server is running on ${port} & Connected to MongoDB using Mongoose`));
  }).catch((err)=> console.log( err.message ))

