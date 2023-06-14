const mongoose = require("mongoose");

const PostSchema = mongoose.Schema(
    {
        userID: {
            type: String,
            required: true,
        },
        desc: {
            type: String,
            max: 500,
        },
        img: {
            type: String,
        },
        likes: {
            type: Array,
            default: [],
        },
    },
    { timestamps: true }
);

module.exports = new mongoose.model("Post", PostSchema);
