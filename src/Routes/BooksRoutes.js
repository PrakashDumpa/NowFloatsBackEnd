import express, { request, response } from "express";
import Book from "../model/BooksSchema.js";

const nowfloatsRoute = new express.Router();

const getBooksResult = async (request, response) => {
  try {
    const results = await Book.find();
    response.status(200);
    response.send({ result: results });
    console.log("Books Api is Working");
  } catch (error) {
    console.log("Something Went Wrong!");
    response.status(404);
    response.send({ msg: "Something Went Wrong!" });
  }
};

const getBookDetailsResult = async (request, response) => {
  try {
    const params = request.params;
    // console.log(params);
    const bookDetails = await Book.findOne(params);
    // console.log(bookDetails);
    response.status(200);
    response.send({ bookDetails: bookDetails });
    console.log("BooksDetails Api is Working");
  } catch (error) {
    console.log("Something Went Wrong!");
    response.status(404);
    response.send({ msg: "Something Went Wrong!" });
  }
};

const getBookUpLoadedResult = async (request, response) => {
  try {
    const body = request.body;
    // console.log(body);
    const result = await Book.insertMany([body]);
    // console.log(result);
    response.status(200);
    response.send({ result: result });
    console.log("BookUpload Api is Working");
  } catch (error) {
    response.status(404);
    response.send({ mgs: "SomeThing Went Wrong!" });
    console.log("BookUpload Api Does Not Working", error);
  }
};

nowfloatsRoute.get("/", getBooksResult);
nowfloatsRoute.get("/book/:_id", getBookDetailsResult);
nowfloatsRoute.post("/book/upload", getBookUpLoadedResult);

export default nowfloatsRoute;
