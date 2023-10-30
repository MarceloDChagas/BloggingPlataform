import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
	_id: {
		type: String, 
		required: true,
	},	
	name: {
		type: String,
		required: true,
	},
	username: {
		type: String,
		unique: true,
		lowercase: true,
		required: true,
	},
	age: {
		type: Number,
		required: true,
	},
	email: {
		type: String,
		unique: true,
		lowercase: true,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	createdAt: {
		type: Date,
		default: Date.now(),
	},
	posts: [
		{
			type: String,
			default: [],
			ref: "PostSchema",
		},
	],
	likedPosts: [
		{
			type: String,
			default: [],
		},
	],
});

export default mongoose.model("UserSchema", UserSchema);
