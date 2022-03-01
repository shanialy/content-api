import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';



const contentApi = createApi({
    reducerPath: "contentApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:7777" }),
    endpoints: (builder) => ({

        // Favourites Folder Queries

        // get all favourite folders
        getAllFolders: builder.query({
            query: () => ({
                url: "/api/favouritesFolder/"
            })
        }),

        // Create Folder
        createFolder: builder.mutation({
            query: (folderName) => ({
                url: `/api/favouritesFolder`,
                method: "POST",
                body: folderName
            })
        }),


        //Favourite Posts Queries

        // get all favourite posts by folder id
        getAllFavouritePosts: builder.query({
            query: (folderId) => ({
                url: `/api/favouritePosts/all_posts/${folderId}`
            })
        }),

        //User Queries

        // update user queries
        updateUser: builder.mutation({
            query: (params)=>({
                url: `/api/user/${params.userId}`,
                method:"PUT",
                body: params.user
            }),
        })
    }),
});


export { contentApi };
export const {
    useGetAllFoldersQuery,
    useGetAllFavouritePostsQuery,
    useCreateFolderMutation,
    useUpdateUserMutation
} = contentApi;