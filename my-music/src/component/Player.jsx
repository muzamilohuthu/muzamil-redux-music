import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { changeSong } from '../redux/reducer/song';

const Player = () => {
    const song = useSelector(state => state.song.value);
    const list =useSelector(state => state.list.value);


   const dispatch = useDispatch();

   const index = list.findIndex((item) => item.id === song.id);

   const isPre =() => index > 0 && list.length-1 && list.length > 1;

   const isNext =() => index < list.length-1 && list.length >1 ;

   const reloadMusic = () => {
    const player = document.getElementById('audio');
    player.load();
    player.play();
   }

    return (
        <div className='player'>
            <div className='d-flex justify-content-center align-items-center'>
                 <img src={song.artwork} alt={song.title} height="50" width="50" style={{borderRadius:`15px` , marginRight:10}} className='palyerimg' />
                 <div className='name'>{song.title}</div>
                 <div className={`player-control ${!isPre() && 'cursor-disable'}`}
                 onClick={()=> {
                    if(isPre()){
                        dispatch(changeSong(list[index-1]))
                        reloadMusic();
                    }
                }}
                 >
                    <FaArrowLeft  />
                 </div> 
                 <audio id='audio' controls>
                    <source  src={ song.url} type='audio/mpeg'/>
                 </audio>
                 <div className={`player-control ${!isNext() && 'cursor-disable'}`}
                 onClick={()=> {
                    if(isNext()){
                        dispatch(changeSong(list[index+1]))
                        reloadMusic();
                    }
                }}
                 >
                    <FaArrowRight  />
                 </div> 
 
            </div>
        </div>
    );
};

export default Player;