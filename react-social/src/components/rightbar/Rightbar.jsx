import "./rightbar.css";
import {Users} from "../../dummyData";
import Online from "../online/Online";

function Rightbar() {

    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                <div className="birthdayContainer">
                    <img className="birthdayImg" src="/assets/gift.png" alt="" />
                    <span className="birthdayText">
                        <b>Pola Poster</b> and <b>3 other friends</b> have a birthday today.
                    </span>
                </div>
                <img src="/assets/ad.png" alt="" className="rightbarAd" />
                <h4 className="rightbarTitle">Online friends</h4>
                <ul className="rightbarFriendList">
                    {Users.map(user => {
                        return <Online data={user}/>
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Rightbar;