import mongoose from "mongoose";

// Created
const createdgenres = mongoose.model(
  "Genres",
  new mongoose.Schema({
    name: {
      type: String,
      required,
    },
  })
);

export default createdgenres;
