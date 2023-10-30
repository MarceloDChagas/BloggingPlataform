import mongoose from "mongoose";

const Schema = mongoose.Schema;

const PostSchema = new Schema({
	_id: {
		type: String, 
		required: true,
	},
	title: {
		type: String,
		required: true,
	},
	content: {
		type: String,
		required: true,
	},
	comments: [
		{
			type: String,
			ref: "Comment",
		},
	],
	user: {
		type: String,
		ref: "User",
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

export default mongoose.model("PostSchema", PostSchema);