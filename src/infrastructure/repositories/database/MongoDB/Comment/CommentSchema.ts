import mongoose from "mongoose";

const Schema = mongoose.Schema;

const CommentSchema = new Schema({
	_id: {
		type: String, 
		required: true,
	},
	content: {
		type: String,
		required: true,
	},
	post: {
		type: String,
		lowercase: true,
	},
	likes: {
		type: Number,
		default: 0,
	},
	createdAt: {
		type: Date,
		default: Date.now(),
	},
});

export default mongoose.model("CommentSchema", CommentSchema);
