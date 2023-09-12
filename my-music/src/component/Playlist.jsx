import React, { useState } from 'react';
import { Playlist } from '../data/Musiclist';

const PlayList = () => {
    const [isPlaylist ,setIsPlaylist] = useState(true);
    return (
        <div className='songs d-flex flex-wrap justify-content-center'>

          {
            isPlaylist ? Playlist.map((item)=> <div className='song text-center '  
            onClick={() => { setIsPlaylist(false);
            }}> 
            <img src={item.imgUrl} alt={item.title}  className='audio-img'/>
            <div>{item.title}</div>

            
            
            </div>)
            :"songs"
          }
        </div>
    );
};

export default PlayList;