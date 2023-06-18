import "./closefriend.css";

function CloseFriend({ data }) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    return (
        <li className="sidebarFriend">
            <img crossOrigin="anonymous" src={PF + data.profilePicture} alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">{data.username}</span>
        </li>
    );
}

export default CloseFriend;
