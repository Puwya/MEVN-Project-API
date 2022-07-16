const express = require("express");
const router = express.Router();
const API = require("../controllers/api");

router.get("/", API.fetchAllPostings);
router.get("/:id", API.fetchPostingByID);
router.post("/", API.createPosting);
router.patch("/:id", API.updatePosting);
router.delete("/:id", API.deletePosting);

module.exports = router;