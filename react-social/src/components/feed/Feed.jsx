import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import { Posts } from "../../dummyData";

function Feed() {
    return (
        <div className="feed">
            <div className="feedWrapper">
                <Share />
                {Posts.map(post => {
                    return (<Post key={post.id} data={post}/>)
                })}
            </div>
        </div>
    );
}

export default Feed;
