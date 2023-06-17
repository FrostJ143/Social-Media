const router = require("express").Router();
const { createPost, updatePost, deletePost, toggleLikePost, getPost, getAllPosts, getProfilePosts } = require("../controllers/postsController");

router.route("/").post(createPost);
router.route("/:id").put(updatePost).delete(deletePost).get(getPost);
router.route("/:id/like").put(toggleLikePost);
router.route("/timeline/:userID").get(getAllPosts);
router.route("/profile/:username").get(getProfilePosts);

module.exports = router;
