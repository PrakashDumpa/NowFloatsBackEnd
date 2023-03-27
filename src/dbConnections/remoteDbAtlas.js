import mongoose from "mongoose";

const db =
  "mongodb+srv://prakashdumpa:nowfloats@cluster0.io8ycji.mongodb.net/nowfloatsdb?retryWrites=true&w=majority";

const connectToDb = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("database connection successtully completed");
  } catch (error) {
    console.log("Not Connect to Database");
  }
};

export default connectToDb;
