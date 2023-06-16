import "./online.css";

function Online({data}) {
    return (
        <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
                <img src={data.profilePicture} alt="" className="rightbarProfileImg" />
                <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">{data.username}</span>
        </li>
    )
}

export default Online;