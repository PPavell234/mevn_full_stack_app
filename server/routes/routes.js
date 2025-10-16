const express = require("express");
const API = require("../contollers/api");
const router = express.Router();

router.get("/", API.fetchAllPost);
router.get("/:id",API.fetchAllPost)
router.post("/",API.createPost)
router.patch("/:id",API.updatePost)
router.delete("/:id",API.deletePost)

module.exports = router;