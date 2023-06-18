import "./post.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { format } from "timeago.js";
import { Link } from "react-router-dom";
import { toggleLikePostCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";

function Post({ post }) {
    const [user, setUser] = useState({});
    const [like, setLike] = useState(post?.likes.length);
    const [isLiked, setIsLiked] = useState(false);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const { user: currentUser } = useContext(AuthContext);

    useEffect(() => {
        setIsLiked(post.likes.includes(currentUser._id));
    }, [currentUser._id]);

    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(`/users?userID=${post.userID}`);
            setUser(res.data);
        };
        fetchUser();
    }, [post.userID]);

    const likeHandler = () => {
        toggleLikePostCall(post._id, currentUser._id);
        setLike(isLiked ? like - 1 : like + 1);
        setIsLiked(!isLiked);
    };

    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <Link to={`/profile/${user.username}`}>
                            <img
                                crossOrigin="anonymous"
                                src={user.profilePicture ? PF + user.profilePicture : PF + "person/noAvatar.jpg"}
                                alt=""
                                className="postProfileAvatar"
                            />
                        </Link>
                        <span className="postUsername">{user.username}</span>
                        <span className="postDate">{format(post.createAt)}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVertIcon />
                    </div>
                </div>
                <div className="postMiddle">
                    <span className="postText">{post?.desc}</span>
                    <img crossOrigin="anomynous" src={PF + post?.img} alt="" className="postImg" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src="/assets/like.png" alt="" className="likeIcon" onClick={likeHandler} />
                        <img src="/assets/heart.png" alt="" className="likeIcon" onClick={likeHandler} />
                        <span className="postLikeCounter">{like} people like it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post?.comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post;
