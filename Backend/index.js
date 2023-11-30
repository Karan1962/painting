import express from "express";
import mongoose from "mongoose";
import userRoute from "../Backend/routes/contact.route.js";
const port = 3000;
const app = express();
app.use(express.json());
app.use("/api/user", userRoute);

app.use((err, req, res,next) => {
  const code = err.status || 500;
  const message = err.message || "someting went wrong";

  const error = {
    status: code,
    message: message,
  };

  console.log(error)
  return res.status(error.status).json(error);
  
});

main().then(() => console.log("connected to database"));

async function main() {
  await mongoose.connect(
    "mongodb+srv://karan:karan@painting.uicwcvm.mongodb.net/painting?retryWrites=true&w=majority"
  );
}

app.listen(3000, () => console.log(`server is running on port ${port}`));
