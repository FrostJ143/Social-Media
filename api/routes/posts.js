const router = require("express").Router();
const { createPost, updatePost, deletePost, toggleLikePost, getPost, getAllPosts } = require("../controllers/postsController");

router.route("/").post(createPost);
router.route("/:id").put(updatePost).delete(deletePost).get(getPost);
router.route("/:id/like").put(toggleLikePost);
router.route("/timeline/all").get(getAllPosts);

module.exports = router;
