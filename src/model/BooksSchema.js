import mongoose from "mongoose";

const BooksSchemaFunction = new mongoose.Schema({
  author: String,
  country: String,
  imageLink: String,
  language: String,
  link: String,
  pages: Number,
  title: String,
  year: Number,
});

const Book = new mongoose.model("Book", BooksSchemaFunction);

export default Book;
