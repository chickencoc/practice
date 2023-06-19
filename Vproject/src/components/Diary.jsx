import React, { useEffect, useState } from 'react'
import ColorApp from './ColorApp'
import DarkModeApp from './DarkModeApp';
import CalenderApp from './diary/CalenderApp';
import VideoPlayerApp from './diary/VideoPlayerApp';

function Diary() {
    // ColorApp
    const [tapTog, setTapTog] = useState(0);

    const dMenuList = ["GamjaInfo", "GamjaStory", "DiaryList", "ColorApp", "DarkModeApp", "CalenderApp", "VideoPlayerApp"];

    useEffect(() => {
      console.log(tapTog);
    },[tapTog]);

  return (
    <div id="diaryBox" className='wrapper'>
        <div id="diaryMenu">
          <ul>
            {
              dMenuList.map((e, i) => {
                return (
                  <li key={i}><h3 key={i * 2} onClick={() => setTapTog(i)}>- {e}</h3></li>
                )
              })
            }
          </ul>
        </div>
        <div id="diaryDetail">
            { tapTog === 3 && <ColorApp />}
            { tapTog === 4 && <DarkModeApp />}
            { tapTog === 5 && <CalenderApp />}
            { tapTog === 6 && <VideoPlayerApp />}
        </div>
        
    </div>
  )
}

export default Diary