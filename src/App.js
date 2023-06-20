import React, { useEffect, useState } from 'react';
import './App.css';
import Video from "./pages/Video"
import db from "./config/firebase"
import { collection, getDocs } from 'firebase/firestore/lite'

function App() {

  let maxHeight;
  if(window.innerHeight <= 800){
    maxHeight = window.innerHeight
  }

  const [video, setVideos] = useState([])

  async function getVideos() {
    const videosCollection = collection(db, "videos");
    const videosSnapshot = await getDocs(videosCollection);
    const videosList = videosSnapshot.docs.map(doc => doc.data())
    setVideos(videosList);

  }


  useEffect(() => {
    getVideos();
  }, []);
;

  return (
    <div className="app" style={{ maxHeight: maxHeight + 'px' }}> 
      <div className="app__videos">

        {video.map((item) => {
          return (
            <Video
              likes={item.likes}
              messages={item.messages}
              shares={item.shares}
              name={item.name}
              description={item.description}
              music={item.music}
              url={item.url}
            />
          )
        })}
        {/* <Video 2
        likes={111}
        messages={222}
        shares={333}
        name="Mariana"
        description="Brecker o goleiro"
        music="musica épica"
        url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4?t=2023-05-22T19%3A37%3A45.885Z"
         /> */}
         
        {/* <Video
        likes={444}
        messages={555}
        shares={666}
        name="Pedro"
        description="Bird olhando para câmera"
        music="Clap your hands"
        url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/bird.mp4?t=2023-05-22T19%3A40%3A47.052Z"
      />  */}
      </div>
    </div>
  );
}

export default App;