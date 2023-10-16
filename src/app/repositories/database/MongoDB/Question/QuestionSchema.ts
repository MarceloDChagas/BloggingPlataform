import mongoose, { Schema } from "mongoose";

const QuestionSchema = new Schema({
  title: {
    type: "string",
    required: true,
  },
  body: {
    type: "string",
    required: true,
  },
  level: {
    type: "string",
    required: true,
  },
  schoolSubject: {
    required: true,
    type: "string",
  },
});

export default mongoose.model("QuestionSchema", QuestionSchema);
