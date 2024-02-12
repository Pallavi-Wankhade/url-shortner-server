import shortid from "shortid";
import Url from "../models/Url.js";

export const submitUrlHandler = async (req, res) => {
  const { origUrl } = req.body;
  //generate  a short id for url
  const shortId = shortid.generate();
  const shortUrl = `http://localhost:3000/${shortId}`;

  const urlData = { origUrl, shortUrl, shortId };
  // console.log(urlData);
  try {
    const urlModel = new Url(urlData);
    const savedData = await urlModel.save();
    res.json(savedData);
  } catch (err) {
    console.log(err);
    res.status(500).json({ status: "Rejected." });
  }
};

export const getAllUrlHandler = async (req, res) => {
  try {
    const urlData = await Url.find({});
    res.json(urlData);
  } catch (err) {
    console.log(err);
    res.status(500).json({ status: "Rejected" });
  }
};

export const getExactUrlHandler = async (req, res) => {
  const shortId = req.params.shortid;
  // console.log(shortId);
  try {
    const url = await Url.findOne({ shortId });
    url.clicks++;
    url.save();
    res.redirect(url.origUrl);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ status: "Rejected!" });
  }
};
