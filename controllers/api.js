const postingSchema = require("../models/posting");

module.exports = class API {
  // fetch all posts
  static async fetchAllPostings(req, res) {
    try {
      const postings = await postingSchema.find();
      res.status(200).json(postings);
    } catch (err) {
      res.send(404).json({ message: err.message });
    }
  }
  // fetch post by ID
  static async fetchPostingByID(req, res) {
    res.send("Fetch Post By ID");
  }
  // Create a Post
  static async createPosting(req, res) {
    const posting = req.body;
    const imagename = req.file.filename;
    postingSchema.image = imagename;
    try {
      await postingSchema.create(posting);
      res.status(201).json({ message: "Post Created Successfully!" })
    } catch (err) {
      res.status(400).json({ message: err.message })
    }
  }
  // Update a Post
  static async updatePosting(req, res) {
    res.send("Update Post");
  }
  // Delete a Post
  static async deletePosting(req, res) {
    res.send("Delete Post");
  }
}