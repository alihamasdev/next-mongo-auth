import mongoose from "mongoose";

export const dbConnect = async () => {
	try {
		await mongoose.connect(process.env.MONGO_DB_URL!);
		const connection = mongoose.connection;

		connection.on("connected", () => console.log("MongoDb connected"));

		connection.on("error", (error) => {
			console.error("Database connection error", error);
			process.exit();
		});
	} catch (error) {
		console.error("Something went wrong while database connection", error);
	}
};
