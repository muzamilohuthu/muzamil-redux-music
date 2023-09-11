import React from 'react';
import { BsFillFileMusicFill } from "react-icons/bs";
import { RiPlayListFill } from "react-icons/ri";

const Menu = ({isSongs, setIsSongs}) => {
    return (
        <div className='menu'>
           <div className={`d-flex menu-item ${isSongs && 'active'}`}
            onClick={() =>setIsSongs(true)}
            >
            <BsFillFileMusicFill />
            <span>Songs</span>
          </div>
          <div className={`d-flex menu-item ${!isSongs && 'active'}`}
           onClick={() =>setIsSongs(false)}
           >
            <RiPlayListFill />
            <span>playlist</span>
            
          </div>
        </div>
    );
};

export default Menu;