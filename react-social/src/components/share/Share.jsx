import "./share.css";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import CancelIcon from "@mui/icons-material/Cancel";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
const FormData = require("form-data");

function Share() {
    const { user } = useContext(AuthContext);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const desc = useRef();
    const [file, setFile] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = {
            userID: user._id,
            desc: desc.current.value,
        };
        if (file) {
            const data = new FormData();
            data.append("file", file);
            try {
                const res = await axios.post("/upload", data);
                newPost.img = res.data;
            } catch (error) {
                console.log(error);
            }
        }
        try {
            await axios.post("/posts", newPost);
            window.location.reload();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img
                        crossOrigin="anonymous"
                        src={user.profilePicture ? PF + user.profilePicture : PF + "/person/noAvatar.jpg"}
                        alt=""
                        className="shareProfileImg"
                    />
                    <input type="text" placeholder={`What's in your mind, ${user.username}?`} className="shareInput" ref={desc} />
                </div>
                <hr className="shareHr" />
                {file && (
                    <div className="shareImgContainer">
                        <img src={URL.createObjectURL(file)} alt="shareImg" className="shareImg" />
                        <CancelIcon onClick={() => setFile(null)} />
                    </div>
                )}
                <form className="shareBottom" onSubmit={handleSubmit}>
                    <div className="shareOptions">
                        <label htmlFor="file" className="shareOption">
                            <PermMediaIcon className="shareIcon" htmlColor="red" />
                            <span className="shareOptionText">Photo/video</span>
                            <input
                                style={{ display: "none" }}
                                type="file"
                                id="file"
                                accept=".jpg,.png,.jpeg"
                                onChange={(e) => {
                                    setFile(e.target.files[0]);
                                    e.target.value = null;
                                }}
                            />
                        </label>
                        <div className="shareOption">
                            <VideoCallIcon className="shareIcon" htmlColor="blue" />
                            <span className="shareOptionText">Live video</span>
                        </div>
                        <div className="shareOption">
                            <EmojiEmotionsIcon className="shareIcon" htmlColor="green" />
                            <span className="shareOptionText">Feeling/activity</span>
                        </div>
                        <div className="shareOption">
                            <LocationOnIcon className="shareIcon" htmlColor="yellow" />
                            <span className="shareOptionText">Location</span>
                        </div>
                    </div>
                    <button className="shareBtn" type="submit">
                        Share
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Share;
