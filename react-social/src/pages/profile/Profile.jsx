import "./profile.css";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import axios from "axios";
import { useEffect } from "react";

function Profile() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
        <div className="profile">
            <Topbar />
            <div className="profileContainer">
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img src={`${PF}post/3.jpeg`} alt="" className="profileCoverImg" />
                            <img src={`${PF}person/7.jpeg`} alt="" className="profileUserImg" />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">Tan Sang</h4>
                            <span className="profileInfoDesc">Hey! My friends</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed username={"sang"} />
                        <Rightbar profile />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
