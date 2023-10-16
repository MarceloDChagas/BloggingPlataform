import mongoose from "mongoose";

const { Schema } = mongoose;

const UserSchema = new Schema({
  name: {
    type: "string",
    required: true,
  },
  college: {
    type: "string",
    required: true,
  },
  email: {
    type: "string",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

export default mongoose.model("UserSchema", UserSchema);
