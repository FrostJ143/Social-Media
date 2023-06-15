import "./share.css";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import LocationOnIcon from "@mui/icons-material/LocationOn";

function Share() {
    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img src="/assets/person/1.jpeg" alt="" className="shareProfileImg" />
                    <input type="text" placeholder="What's in your mind?" className="shareInput" />
                </div>
                <hr className="shareHr" />
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <PermMediaIcon className="shareIcon" htmlColor="greeen" />
                            <span className="shareOptionText">Photo/video</span>
                        </div>
                        <div className="shareOption">
                            <VideoCallIcon className="shareIcon" htmlColor="red" />
                            <span className="shareOptionText">Live video</span>
                        </div>
                        <div className="shareOption">
                            <EmojiEmotionsIcon className="shareIcon" htmlColor="yellow" />
                            <span className="shareOptionText">Feeling/activity</span>
                        </div>
                        <div className="shareOption">
                            <LocationOnIcon className="shareIcon" htmlColor="yellow" />
                            <span className="shareOptionText">Location</span>
                        </div>
                    </div>
                    <button className="shareBtn">Share</button>
                </div>
            </div>
        </div>
    );
}

export default Share;
