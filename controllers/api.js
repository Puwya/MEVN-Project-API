const posting = require("../models/posting");

module.exports = class API {
  // fetch all posts
  static async fetchAllPostings(req, res) {
    try {
      const postings = await posting.find();
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
    res.send("Create Post");
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