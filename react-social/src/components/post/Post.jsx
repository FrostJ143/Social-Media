import "./post.css";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Users } from "../../dummyData";

function Post({data}) {
    const user = Users.find(user => user.id === data.userId);

    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src={user.profilePicture} alt="" className="postProfileAvatar" />
                        <span className="postUsername">{user.username}</span>
                        <span className="postDate">{data.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVertIcon />
                    </div>
                </div>
                <div className="postMiddle">
                    <span className="postText">{data?.desc}</span>
                    <img src={data.photo} alt="" className="postImg" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src="/assets/like.png" alt="" className="likeIcon" />
                        <img src="/assets/heart.png" alt="" className="likeIcon" />
                        <span className="postLikeCounter">{data.like} people like it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{data.comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post;