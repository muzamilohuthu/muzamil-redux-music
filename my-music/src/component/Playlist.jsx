import React, { useState } from 'react';
import { Playlist } from '../data/Musiclist';
import { useDispatch, useSelector } from 'react-redux';
import Song from './Song';
import { changeList } from '../redux/reducer/List';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';

const PlayList = () => {
    const [isPlaylist ,setIsPlaylist] = useState(true);
    const [playlist ,setpalylist] =useState({})
    const  list =useSelector (state => state.list.value);
    const dispatch = useDispatch();
    return (
        <div className='songs d-flex flex-wrap justify-content-center'>

          {
            isPlaylist ? Playlist.map((item)=> ( 
            <div className='song text-center '  
            onClick={() => { 
              setpalylist(item)
              setIsPlaylist(false);
              dispatch(changeList(item.songs))
            }}> 
            <img src={item.imgUrl} alt={item.title}  className='audio-img'/>
            <div>{item.title}</div>
            
            </div>
            ))
            
            : <div> 
              <div className='playlisy-header'> 
              < BsFillArrowLeftCircleFill onClick={()=> setIsPlaylist(true)} />
              {playlist.title}
              </div>
              {list.map((item) => ( 
                <div className='d-flex flex-wrap justify-content-center'> 
              <Song {...item} />
              </div>
              ))}

            </div>
          }
        </div>
    );
};

export default PlayList;