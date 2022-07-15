module.exports = class API {
  // fetch all posts
  static async fetchAllPost(req, res) {
    res.send("HELLO FROM API");
  }
  // fetch post by ID
  static async fetchPostByID(req, res) {
    res.send("Fetch Post By ID");
  }
  // Create a Post
  static async createPost(req, res) {
    res.send("Create Post");
  }
  // Update a Post
  static async updatePost(req, res) {
    res.send("Update Post");
  }
  // Delete a Post
  static async deletePost(req, res) {
    res.send("Delete Post");
  }
}