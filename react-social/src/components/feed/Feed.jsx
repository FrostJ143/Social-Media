import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

// when you proxy, it will automatically add /api so you dont need to do that. But if you want remember add /api and http method add /route or will make wrong url
function Feed({ username }) {
    const [posts, setPosts] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        const fetchData = async () => {
            const res = username ? await axios.get(`/posts/profile/${username}`) : await axios.get(`posts/timeline/${user._id}`);
            setPosts(
                res.data.sort((p1, p2) => {
                    return new Date(p2.createdAt) - new Date(p1.createdAt);
                })
            );
        };
        fetchData();
    }, [username]);

    return (
        <div className="feed">
            <div className="feedWrapper">
                {(user.username === username || !username) && <Share />}
                {posts.map((post) => {
                    return <Post key={post._id} post={post} />;
                })}
            </div>
        </div>
    );
}

export default Feed;
