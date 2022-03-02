import mongoose from "mongoose";

const userSchema = mongoose.Schema(
    {
     userName: String,
     email: {String, unique: true},
     password: String,
    },
    {collection: 'user-data'}
);

const User = mongoose.model("User", userSchema);
export default User;
