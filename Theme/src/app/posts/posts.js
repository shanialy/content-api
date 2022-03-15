import { createSlice } from "@reduxjs/toolkit"

const postsSlice = createSlice({
    name: "postsSlice",
    initialState: {
        post: {
            
        }
    },
    reducers: {
        addpost: (state, action) => {
            const selectedPost = action.payload;
            state.post = selectedPost;
        },
        removePost: (state, action)=>{
            state.post= null;
        }
    }

});

export const { addpost, removePost } = postsSlice.actions;
export default postsSlice.reducer;
