import React, { useState } from 'react';
import Menu from '../component/Menu';
import { FaSearch } from "react-icons/fa";
import Song from '../component/Song';
import { MusicList } from '../data/Musiclist';
import PlayList from '../component/Playlist';

import img1 from '../images/monkey.png'
import { useSelector } from 'react-redux';
import Player from '../component/Player';

const Home = () => {

    const [isSongs, setIsSongs] =useState(true);
    const song =useSelector(state => state.song.value);
    const [search, setSearch] =useState('');

    return (
        <div className='home'>
           <h1 className='head'><img src={img1} alt="img" className='logo-img'/>Tune Monkeys</h1>
           <div className='d-flex justify-content-center search'>
            <FaSearch />
            <input 
             size="30"
             type="search"
             id='search-input' 
             className='form-control w-auto' 
             placeholder=' music search'
             value={search}
             onChange={(e) => setSearch(e.target.value)}
            />
           </div>

        

      <div className='d-flex content'>
        <Menu isSongs={isSongs} setIsSongs={setIsSongs} />
        <div style={{flex: 1}}>
        { isSongs ? (
      
       
        <div className='d-flex flex-wrap songs'> 
        {

            MusicList.filter(data => data.title.toLowerCase().includes(search.toLowerCase())
            ).map((item) =>( 
            <Song {...item} />
            ))}
          
        </div>
      
      
        )
      : (
       < PlayList search={search} />

    )}
    </div>
      </div>
     {song && <Player />}
        </div>
    );
};

export default Home;