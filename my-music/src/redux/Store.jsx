import {configureStore } from '@reduxjs/toolkit';
import  listReducer  from './reducer/List';
import songReducer from './reducer/song'


export const store =  configureStore({
    reducer:{
       list: listReducer,
       song: songReducer
    }
})