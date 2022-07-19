import mongoose from "mongoose";

// Created
const createdplatforms = mongoose.model(
  "Platforms",
  new mongoose.Schema({
    name: {
      type: String,
      required,
    },
    image: {
      type: String,
      required,
    },
    requirements_en: {
      type: String,
    }
  })
);

export default createdplatforms;