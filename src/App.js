import "./App.css";
import Video from "./Video";
import axios from "./axios";
import { useEffect, useState } from "react";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await axios.get("v2/posts");
      setVideos(response.data);

      return response;
    }

    fetchPosts();
  }, []);

  console.log(videos);

  return (
    //BEM Naming convention
    <div className="app">
      <h1>Lets build a FULL STACK MERN tik tok clone</h1>
      <div className="app__videos">
        {videos.map(
          ({ url, channel, description, song, likes, messages, shares }) => (
            <Video
              url={url}
              channel={channel}
              description={description}
              song={song}
              likes={likes}
              messages={messages}
              shares={shares}
            />
          )
        )}
      </div>

      {/** app container */}
      {/**<Video /> */}
      {/**<Video /> */}
      {/**<Video /> */}
      {/**<Video /> */}
      {/**<Video /> */}
    </div>
  );
}

export default App;
