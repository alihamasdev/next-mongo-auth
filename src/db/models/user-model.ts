import mongoose from "mongoose";
import type { ObjectId, SchemaTimestampsConfig } from "mongoose";

export interface UserSchema extends SchemaTimestampsConfig {
	_id: ObjectId;
	name: string;
	email: string;
	password: string;
}

const userSchema = new mongoose.Schema<UserSchema>(
	{
		name: {
			type: String,
			required: [true, "Name is required"]
		},
		email: {
			type: String,
			unique: true,
			required: [true, "Email is required"]
		},
		password: {
			type: String,
			required: [true, "Password is required"]
		}
	},
	{
		timestamps: true
	}
);

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;
