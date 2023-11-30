import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      unique:true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    message:{
      type:String,
    }
  },
  { timestamps: true }
);


const User = new mongoose.model('User',userSchema)

export default User