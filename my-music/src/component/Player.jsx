import React from 'react';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { useSelector } from 'react-redux';

const Player = () => {
    const song = useSelector(state => state.song.value);
    return (
        <div className='player'>
            <div className='d-flex justify-content-center align-item-center'>
                 <img src={song.artwork} alt={song.title} height="50" width="50" style={{borderRadius:`15px` , marginRight:10}} />
                 <div className='name'>{song.title}</div>
                 <div className='player-control'>
                    <BsArrowLeft />
                 </div> 
                 <audio id='audio' controls>
                    <source  src={ song.url} type='audio/mpeg'/>
                 </audio>
                 <div className='player-control'>
                    <BsArrowRight />
                 </div> 
 
            </div>
        </div>
    );
};

export default Player;