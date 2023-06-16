import "./closefriend.css"

function CloseFriend({data}) {

    return (
        <li className="sidebarFriend">
            <img src={data.profilePicture} alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">{data.username}</span>
        </li>
    );
}

export default CloseFriend;