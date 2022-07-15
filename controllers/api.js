module.exports = class API {
  // fetch all posts
  static async fetchAllPost(req, res) {
    res.send("HELLO FROM API");
  }
}