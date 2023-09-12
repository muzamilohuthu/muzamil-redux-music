import { createSlice } from "@reduxjs/toolkit"
import { MusicList } from "../../data/Musiclist";


const initialstate = {
    value : MusicList[0]
}

const list = createSlice({
    name:'song',
    initialstate,
    redusers:{
        changesong : (state ,action) => {
            state.value = action.payload
        }
    }
})

export const { changesong } = list.actions;

export default  list.reducer;
