import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import { useState, useEffect } from "react";
import axios from "axios";

// when you proxy, it will automatically add /api so you dont need to do that. But if you want remember add /api and http method add /route or will make wrong url
function Feed({ username }) {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const res = username ? await axios.get(`/posts/profile/${username}`) : await axios.get("posts/timeline/64888427d80e688630ff162f");
            setPosts(res.data);
        };
        fetchData();
    }, []);

    return (
        <div className="feed">
            <div className="feedWrapper">
                <Share />
                {posts.map((post) => {
                    return <Post key={post._id} post={post} />;
                })}
            </div>
        </div>
    );
}

export default Feed;
