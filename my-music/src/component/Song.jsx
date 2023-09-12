import React from 'react';
import { BsFillPlayCircleFill , BsFillPauseCircleFill } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { changeSong } from '../redux/reducer/song';
const Song = (props) => {
    const song  = useSelector ((state) => state.song.value);
    const dispatch = useDispatch (); 
    return (
        <div className='song text-center' onClick={() => {
         dispatch(changeSong(props));
         setTimeout(() => {
            if(song?.id !== props.id) {
                const player = document.getElementById('audio');
                player.load();
                player.play();
            }
         })
        }}>
            <img className='audio-img' alt={props.title}  src={props.artwork} />
            {props.id ===  song.id? < BsFillPauseCircleFill className='play-icon' /> : 
            < BsFillPlayCircleFill className='play-icon' />
            }
            
            <div>{props.title}</div>
            
            <div>Artist : {props.artist}</div>
        </div>
    );
};

export default Song;