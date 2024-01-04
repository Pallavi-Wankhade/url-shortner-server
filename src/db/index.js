import mongoose from "mongoose";

export const getDBConnection = () => {
  const dbUrl = `mongodb+srv://${process.env.DB_USER_NAME}:${process.env.DB_USER_PSW}@cluster0.rrmogh2.mongodb.net/Persons?retryWrites=true&w=majority`;
  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  mongoose
    .connect(dbUrl, options)
    .then(() => console.log("MongoDB connected successfully"))
    .catch((err) => console.log("MongoDB error: ", err));
};
