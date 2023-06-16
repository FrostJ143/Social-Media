import "./post.css";
import MoreVertIcon from '@mui/icons-material/MoreVert';

function Post() {

    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src="/assets/person/1.jpeg" alt="" className="postProfileAvatar" />
                        <span className="postUsername">Tan Sang</span>
                        <span className="postDate">5 mins ago</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVertIcon />
                    </div>
                </div>
                <div className="postMiddle">
                    <span className="postText">Hey! It's my first post :))</span>
                    <img src="/assets/post/1.jpeg" alt="" className="postImg" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src="/assets/like.png" alt="" className="likeIcon" />
                        <img src="/assets/heart.png" alt="" className="likeIcon" />
                        <span className="postLikeCounter">32 people like it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">8 comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post;