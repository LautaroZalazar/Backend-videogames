import mongoose from "mongoose";

// Created
const createdvideo = mongoose.model(
  "Videogames",
  new mongoose.Schema({
    name: {
      type: String,
      required,
    },
    released: {
      type: String,
      required,
    },
    date: {
      type: Date,
      required,
    },
    image: {
      type: String,
      required,
    },
    rating: {
      type: Number,
      required,
    },
    reviews: {
      type: Array,
      required,
    },
    stores: {
      type: Array,
      required,
    },
  })
);

export default createdvideo;
