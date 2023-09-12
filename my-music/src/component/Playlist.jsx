import React, { useState } from 'react';
import { Playlist } from '../data/Musiclist';
import { useDispatch, useSelector } from 'react-redux';
import Song from './Song';
import { changeList } from '../redux/reducer/List';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';

const PlayList = ({search}) => {
    const [isPlaylist ,setIsPlaylist] = useState(true);
    const [playlist ,setpalylist] =useState({})
    const  list =useSelector (state => state.list.value);
    const dispatch = useDispatch();
    return (
        <div className='songs d-flex flex-wrap justify-content-center'>

          {
            isPlaylist ? Playlist.filter(data => data.title.toLowerCase().includes(search.toLowerCase())
            ).map((item)=> ( 
            <div className='song text-center card'  
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
              <div className='d-flex flex-wrap justify-content-center'> 
              {list.filter(data => data.title.toLowerCase().includes(search.toLowerCase())
            ).map((item) => ( 
              <Song {...item} />
              
              ))}
              </div>  
            </div>
          }
        </div>
    );
};

export default PlayList;