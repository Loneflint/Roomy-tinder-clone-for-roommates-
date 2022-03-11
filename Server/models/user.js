import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  username: String,
  user_id: String,
  email: String,
  hashed_password: String,
});

            // username: dbUser.username,
            // user_id: generatedUserId,
            // email: sanitizedEmail,
            // hashed_password: hashedPassword,



// userSchema.statics.isThisEmailInUse = async function (email) {
//   try {
//     const user = await this.findOne({ email });
//     if (user) return false;
//     else return true
//   } catch (error) {
//     console.log("error inside isThisEmailInUse method", error.message);
//     return false;
//   }
// };
const User = mongoose.model("User", userSchema);
export default User;
