const Post = require("../models/Post");
const User = require("../models/User");

const createPost = async (req, res) => {
    try {
        const post = await Post.create({ ...req.body });
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json(error);
    }
};

const updatePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.userID === req.body.userID) {
            await post.updateOne({ ...req.body });
            res.status(201).json({ message: "Edit post successfully" });
        } else {
            res.status(403).json({ message: "You can not edit the post that does not belong to you." });
        }
    } catch (err) {
        res.status(404).json(err);
    }
};

const deletePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.userID === req.body.userID) {
            await Post.findOneAndDelete({ _id: req.params.id });
            res.status(200).json({ message: "Delete post successfully." });
        } else {
            res.status(403).json({ message: "You can not delete the post that does not belong to you." });
        }
    } catch (error) {
        res.status(404).json(error);
    }
};

const toggleLikePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        let message = "";
        if (!post.likes.includes(req.body.userID)) {
            post.likes = [...post.likes, req.body.userID];
            message = "Like post";
        } else {
            post.likes = post.likes.filter((id) => id !== req.body.userID);
            message = "Unlike post";
        }
        await post.save();
        res.status(200).json({ message });
    } catch (error) {
        res.status(404).json(error);
    }
};

const getPost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json(error);
    }
};

const getAllPosts = async (req, res) => {
    try {
        const currentUser = await User.findById(req.params.userID);
        const userPosts = await Post.find({ userID: currentUser._id });
        const friendPosts = await Promise.all(
            currentUser.following.map((id) => {
                return Post.find({ userID: id });
            })
        );
        res.status(200).json(userPosts.concat(...friendPosts));
    } catch (error) {
        res.status(500).json(error);
    }
};

const getProfilePosts = async (req, res) => {
    try {
        const user = await User.findOne({ username: req.params.username });
        const allPosts = await Post.find({ userID: user._id });
        res.status(200).json(allPosts);
    } catch (error) {
        res.status(500).json(error);
    }
};

module.exports = {
    createPost,
    updatePost,
    deletePost,
    toggleLikePost,
    getPost,
    getAllPosts,
    getProfilePosts,
};
