import mongoose from "mongoose";

export const noteSchema = new mongoose.Schema({
  title: {
    type: String,
    Trim: true,
    required: true,
  },
  description: {
    type: String,
    Trim: true,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

export default mongoose.model("notes", noteSchema);
