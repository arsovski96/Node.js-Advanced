import mongoose from "mongoose";

const { Schema } = mongoose;

const prodSchema = new Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
  },
  reviews: [
    {
      rating: { type: Number, required: true },
      comment: { type: String, required: true },
    },
  ],
});

export default prodSchema;
