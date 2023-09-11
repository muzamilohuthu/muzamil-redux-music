import React, { useState } from 'react';
import Menu from '../component/Menu';
// import { FaSearch } from "react-icons/fa";
import Song from '../component/Song';
import { MusicList } from '../data/Musiclist';
import PlayList from '../component/Playlist';

const Home = () => {

    const [isSongs, setIsSongs] =useState(true);
    return (
        <div className='home'>
           <h1 className='head'>Tune Monkeys</h1>
           <div className='d-flex justify-content-center search'>
            
            <input 
            
             size="30"
             type="search"
             id='search-input' 
             className='form-control w-auto' 
             placeholder='music search'

            />
           </div>

        

      <div className='d-flex content'>
        <Menu isSongs={isSongs} setIsSongs={setIsSongs} />
        { isSongs ? (
      <div style={{flex: 1}}>
      { 
        <div className='d-flex flex-wrap songs'> 
        {

            MusicList.map((item) => <Song {...item} />)
        }
          
        </div>
      }
      </div>
        )
      : (
       < PlayList />

    )}
      </div>
        </div>
    );
};

export default Home;