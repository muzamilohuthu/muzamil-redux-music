import React from 'react';
import { BsFillPlayCircleFill } from "react-icons/bs";
const Song = (props) => {
    return (
        <div className='song text-center'>
            <img className='audio-img' alt={props.title}  src={props.artwork} />
            < BsFillPlayCircleFill className='play-icon' />
            <div>{props.title}</div>
            <div>Artist : {props.artist}</div>
        </div>
    );
};

export default Song;