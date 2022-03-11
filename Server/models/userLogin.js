import mongoose from "mongoose";

const userLoginSchema = mongoose.Schema({
  email: String,
  hashed_password: String,
  password: String,
});

const UserLogin = mongoose.model("UserLogin", userLoginSchema);
export default UserLogin;