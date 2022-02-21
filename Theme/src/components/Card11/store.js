

import {configureStore , createReducer} from "@reduxjs/toolkit"

const initialState = {
    cvalue : {
        fields:{
                article_length: "",
                authors: "",
                category: "",
                date_download: "",
                facebook_shares: "",
                image_url: "",
                language: "",
                maintext: "",
                source_domain: "",
                sentiment : "",
                title: "",
                twitter_shares: ""
            },
        id: ""
    }
}

const cardReducer = createReducer(initialState , {
     addCardValue :(state, action)=>{ 
             state.cvalue = action.payload
            }        
})

const store = configureStore({
    reducer :cardReducer 
})

export default store