import mongoose from "mongoose";
import type { Document, SchemaTimestampsConfig } from "mongoose";

export interface UserSchema extends Document, SchemaTimestampsConfig {
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
