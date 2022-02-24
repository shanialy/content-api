import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';



const contentApi = createApi({
    reducerPath: "contentApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:7777" }),
    endpoints: (builder) => ({

        // Favourites Folder Queries
        getAllFolders: builder.query({
            query:()=>({
                url: "/api/favouritesFolder/"
            })
        }),


    }),
});


export {contentApi};
export const {useGetAllFoldersQuery} = contentApi;