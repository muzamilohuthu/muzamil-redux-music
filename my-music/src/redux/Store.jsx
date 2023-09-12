import {configureStore } from '@reduxjs/toolkit';
import  listReducer  from './reducer/List';


export const store =  configureStore({
    reducer:{
       list: listReducer
    }
})