import mongoose from "mongoose";

const urlSchema = new mongoose.Schema(
  {
    origUrl: {
      type: String,
      trim: true,
      required: true,
    },
    shortId: {
      type: String,
      trim: true,
    },
    shortUrl: {
      type: String,
      trim: true,
    },
    clicks: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);
const Url = mongoose.model("Url", urlSchema);

export default Url;
