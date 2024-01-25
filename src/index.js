// require('dotenv').config({ path: './env' });

import dotenv from "dotenv";

import connectDB from "./db/index.js";

dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    const port = process.env.PORT || 8000;

    app.on("error", (error) => {
        console.log("util/index.js error -----",error)
        process.exit(1)
    })

    app.listen(port, () => {
      console.log("utils/index.js   server running at port", port);
    });
  })
  .catch((err) => {
    console.log(" util/index.js  MONGO DB connection failed   ---  ");
  });

// ;(async()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
//     } catch (error) {
//         console.error("ERROR :",error)
//         throw error
//     }
// })()
