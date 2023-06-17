const bcrypt = require("bcrypt");
const User = require("../models/User");

const getUser = async (req, res) => {
    const username = req.query.username;
    const userID = req.query.userID;
    try {
        const foundUser = userID ? await User.findOne({ _id: userID }) : await User.findOne({ username: username });
        res.status(200).json(foundUser);
    } catch (error) {
        res.status(404).json(error);
    }
};

const getAllUser = async (req, res) => {
    try {
        const allUsers = await User.find({});
        res.status(200).json(allUsers);
    } catch (error) {
        res.status(404).json(error);
    }
};

const deleteUser = async (req, res) => {
    if (req.body.userID === req.params.id) {
        try {
            await User.findOneAndDelete({ _id: req.body.userID });
            res.status(200).json({ message: "Account has been deleted" });
        } catch (error) {
            res.status(500).json(error);
        }
    } else {
        res.status(404).json({ message: "You are not allow to delete this account" });
    }
};

const updateUser = async (req, res) => {
    if (req.body.userID === req.params.id) {
        if (req.body.password) {
            try {
                req.body.password = await bcrypt.hash(req.body.password, 10);
            } catch (error) {
                res.status(500).json(error);
            }
        }

        try {
            await User.findOneAndUpdate({ _id: req.body.userID }, { ...req.body });
            res.status(200).json({ message: "Account has been updated" });
        } catch (error) {}
    } else {
        res.status(404).json({ message: "You are not allow to update another account" });
    }
};

const followUser = async (req, res) => {
    if (req.body.userID !== req.params.id) {
        try {
            const foundUser = await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.userID);
            if (!foundUser.followers.includes(req.body.userID)) {
                foundUser.followers = [...foundUser.followers, req.body.userID];
                currentUser.following = [...currentUser.following, req.params.id];
                await foundUser.save();
                await currentUser.save();
                res.status(200).json({ message: "Follow successfully" });
            } else {
                res.status(403).json({ message: "You have already followed this user" });
            }
        } catch (error) {
            res.status(500).json(error);
        }
    } else {
        res.status(403).json({ message: "You can not follow yourself" });
    }
};

const unfollowUser = async (req, res) => {
    if (req.body.userID !== req.params.id) {
        try {
            const foundUser = await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.userID);
            if (foundUser.followers.includes(req.body.userID)) {
                foundUser.followers = foundUser.followers.filter((id) => id !== req.body.userID);
                currentUser.following = currentUser.following.filter((id) => id !== req.params.id);
                await foundUser.save();
                await currentUser.save();
                res.status(200).json({ message: "Unfollow successfully" });
            } else {
                res.status(403).json({ message: "You dont follow this user" });
            }
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json({ message: "You can not unfollow yourself" });
    }
};

module.exports = { updateUser, deleteUser, getUser, getAllUser, followUser, unfollowUser };
