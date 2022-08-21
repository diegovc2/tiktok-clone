import React, { useRef, useState } from "react";
import "./Video.css";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";

function Video({ url }) {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const handleVideoPress = () => {
    //If video is playing stop....
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
    //If video is stopped, play it....
  };

  return (
    <div className="video">
      <video
        onClick={handleVideoPress}
        className="video__player"
        loop
        ref={videoRef}
        src={url}
      >
        Browser not supported
      </video>

      <VideoFooter
        channel={"cancion de importacion"}
        description={"Esta es una prueba de TikTok"}
        song={"Stay with me - Noriko Takeuchi"}
      />
      <VideoSidebar likes={111} shares={222} messages={333} />
      {/**Video Sidebar */}
    </div>
  );
}

export default Video;
