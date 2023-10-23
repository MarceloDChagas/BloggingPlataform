import mongoose from "mongoose";

const Schema = mongoose.Schema;

const CommentSchema = new Schema({
	content: {
		type: String,
		required: true,
	},
	post: {
		type: String,
		lowercase: true,
	},
	createdAt: {
		type: Date,
		default: Date.now(),
	},
});

export default mongoose.model("CommentSchema", CommentSchema);
