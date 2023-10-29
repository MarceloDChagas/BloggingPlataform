import mongoose from "mongoose";

const Schema = mongoose.Schema;

const PostSchema = new Schema({
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
			type: Schema.Types.ObjectId,
			ref: "Comment",
		},
	],
	user: {
		type: Schema.Types.ObjectId,
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