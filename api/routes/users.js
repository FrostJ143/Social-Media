const express = require("express");
const { updateUser, deleteUser, getUser, getAllUser, followUser, unfollowUser, getUserFriends } = require("../controllers/usersController");
const router = express.Router();

router.route("/").get(getUser);
router.route("/:id").put(updateUser).delete(deleteUser);
router.route("/:id/follow").put(followUser);
router.route("/:id/unfollow").put(unfollowUser);
router.route("/friends/:id").get(getUserFriends);

module.exports = router;
