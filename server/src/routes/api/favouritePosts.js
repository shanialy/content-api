import express from "express";
import {
    postFavouritePost,
    getSinglePost,
    getAllPosts,
    deleteSinglePost,
    deleteAllPosts,
    updatePost
} from "../../controllers/favouritePostsController.js"
import {
    postValidation,
    updateValidation
} from "../validations/favouritePostsValidation.js"

const router = express.Router();


// route:  POST /api/favouritePosts/:id
// desc:   creating post by favourites folder id
router.post("/:id", postValidation , postFavouritePost);


// route:  GET /api/favouritePosts/post/:id
// desc:   reading a single post by post id
router.get("/post/:id", getSinglePost);


// route:  GET /api/favouritePosts/all_posts/:id
// desc:   reading all posts in favourites folder by folder id
router.get("/all_posts/:id", getAllPosts);



// route:  DELETE /api/favouritePosts/post/:id
// desc:   Deleting a post by post id
router.delete("/post/:id", deleteSinglePost);



// route:  DELETE /api/favouritePosts/all_posts/:id
// desc:   Deleting all posts in favourites folder by folder id
router.delete("/all_posts/:id", deleteAllPosts);


// route:  PATCH /api/favouritePosts/:id
// desc:   Updating a post by post id
router.patch("/:id", updateValidation , updatePost);

export default router;