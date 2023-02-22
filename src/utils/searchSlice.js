import { createSlice } from "@reduxjs/toolkit";

const searchSlice= createSlice({
    name:"search",
    initialState:{

    },
    reducers:{
        cacheResults:(state,action)=>{
            // {"ip":["iphone","iphone11"]}

            state=Object.assign(state,action.payload)
        }
    }
})
export const {cacheResults}= searchSlice.actions;

export default searchSlice.reducer


// what is chache 

// cache [ i,ip,iph,iphone  ] bigo of n O[n]

//  if we take object  0[1]

// new map()