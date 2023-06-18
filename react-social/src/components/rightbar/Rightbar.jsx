import "./rightbar.css";
import Online from "../online/Online";
import axios from "axios";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { Users } from "../../dummyData";
import { useContext, useEffect, useState } from "react";
import { Follow, Unfollow } from "../../context/AuthActions";

function Rightbar({ user }) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const { user: currentUser, dispatch } = useContext(AuthContext);
    const [isFollow, setIsFollow] = useState(false);
    console.log(currentUser);

    useEffect(() => {
        setIsFollow(currentUser.following.includes(user?._id));
    }, [currentUser.following, user._id]);

    const HomeRightbar = () => {
        return (
            <>
                <div className="birthdayContainer">
                    <img className="birthdayImg" src="/assets/gift.png" alt="" />
                    <span className="birthdayText">
                        <b>Pola Poster</b> and <b>3 other friends</b> have a birthday today.
                    </span>
                </div>
                <img src="/assets/ad.png" alt="" className="rightbarAd" />
                <h4 className="rightbarTitle">Online friends</h4>
                <ul className="rightbarFriendList">
                    {Users.map((user) => {
                        return <Online key={user.id} data={user} />;
                    })}
                </ul>
            </>
        );
    };

    const ProfileRightbar = () => {
        const [friendsList, setFriendsList] = useState([]);

        const handleClick = async () => {
            try {
                if (!isFollow) {
                    await axios.put(`/users/${user._id}/follow`, { userID: currentUser._id });
                    dispatch(Follow(user._id));
                } else {
                    await axios.put(`/users/${user._id}/unfollow`, { userID: currentUser._id });
                    dispatch(Unfollow(user._id));
                }
            } catch (error) {
                console.log(error);
            }
        };

        useEffect(() => {
            const getFriends = async () => {
                try {
                    const res = await axios.get(`/users/friends/${user?._id}`);
                    setFriendsList(res.data);
                } catch (error) {
                    console.log(error);
                }
            };
            getFriends();
        }, [user._id]);

        return (
            <>
                {currentUser.username !== user.username && (
                    <button className="rightbarFollowButton" onClick={handleClick}>
                        {!isFollow ? "Follow" : "Unfollow"}
                        {!isFollow ? <AddIcon /> : <RemoveIcon />}
                    </button>
                )}
                <h4 className="rightbarTitle">User information</h4>
                <div className="rightbarInfo">
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">City:</span>
                        <span className="rightbarInfoValue">{user.city}</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">From:</span>
                        <span className="rightbarInfoValue">{user.from}</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">Relationship:</span>
                        <span className="rightbarInfoValue">{user.relationship === 1 ? "Single" : user.relationship === 2 ? "Married" : "-"}</span>
                    </div>
                </div>
                <h4 className="rightbarTitle">User friends</h4>
                <div className="rightbarFollowings">
                    {friendsList.map((friend) => {
                        return (
                            <Link key={friend._id} to={`/profile/${friend.username}`} style={{ textDecoration: "none", color: "#000" }}>
                                <div className="rightbarFollowing">
                                    <img
                                        src={friend.profilePicture ? PF + friend.profilePicture : PF + "/person/noAvatar.jpg"}
                                        alt=""
                                        className="rightbarFollowingImg"
                                    />
                                    <span className="rightbarFollowingName">{friend.username}</span>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </>
        );
    };

    return (
        <div className="rightbar">
            <div className="rightbarWrapper">{user ? <ProfileRightbar /> : <HomeRightbar />}</div>
        </div>
    );
}

export default Rightbar;
