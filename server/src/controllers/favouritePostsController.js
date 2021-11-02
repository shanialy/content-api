import favouritePostsModel from "../models/favouritePostsModel.js";
import { validationResult } from "express-validator";


// route:  POST /api/favouritePosts/:id
// desc:   creating post by favourites folder id
const postFavouritePost = async (req, res) => {
    const validationErrors = validationResult(req);
    if (!validationErrors.isEmpty()) {
        res.status(400).json(validationErrors.array()[0]) // 400 for bad request
    }

    else {
        const favsFolderID = req.params.id;
        const {
            index,
            title,
            maintext,
            category,
            language,
            source_domain,
            readtime,
            facebook,
            twitter,
            image_url,
            url,
            post_id,
            date_publish
        } = req.body;

        try {
            const post = new favouritePostsModel({
                folderId: favsFolderID,
                index,
                title,
                maintext,
                category,
                language,
                source_domain,
                readtime,
                facebook,
                twitter,
                image_url,
                url,
                post_id,
                date_publish
            });
            await post.save();
            res.status(201).json({ successMsg: "Added to favourite folder" }); //201 for created
        } catch (err) {
            res.status(409).json({ msgError: "Post not added to the favourities folder" }); //409 for conflict
            console.log("ERROR OCCOURED WHILE ADDING POST TO FAVOURITES FOLDER", err);
        }
    }
};



// route:  GET /api/favouritePosts/post/:id
// desc:   reading a single post by post id
const getSinglePost = async (req, res) => {
    const postId = req.params.id;
    try {
        const post = await favouritePostsModel.findOne({ _id: postId });

        if (!post) {
            res.status(404).json({ errorMsg: "Post does not exist" })
        }

        res.status(200).json(post);

    } catch (err) {
        console.log("ERROR OCCOURED WHILE GETTING POST", err);
        res.status(500).json({ errorMsg: "Server error" }) //500 for server error
    }
};


// route:  GET /api/favouritePosts/all_posts/:id
// desc:   reading all posts in favourites folder by folder id
const getAllPosts = async (req, res,) => {
    const folderId = req.params.id;
    try {
        const posts = await favouritePostsModel.find({ folderId: folderId });

        if (!posts) res.status(404).json({ errorMsg: "Posts does not exist" })

        res.status(200).json(posts);

    } catch (err) {
        console.log("ERROR OCCOURED WHILE GETTING POSTs", err);
        res.status(500).json({ errorMsg: "Server error" }) //500 for server error
    }
};


// route:  DELETE /api/favouritePosts/post/:id
// desc:   Deleting a post by post id
const deleteSinglePost =  async (req, res) => {
    const postId = req.params.id;
    try {
        await favouritePostsModel.deleteOne({ _id: postId });
        res.status(200).json({ successMsg: "Post deleted successfully" });

    } catch (err) {
        console.log("ERROR OCCOURED WHILE DELETING POST", err);
        res.status(500).json({ errorMsg: "Server error" }) //500 for server error
    }
};



// route:  DELETE /api/favouritePosts/all_posts/:id
// desc:   Deleting all posts in favourites folder by folder id
const deleteAllPosts = async (req, res) => {
    const folderId = req.params.id;
    try {
        await favouritePostsModel.deleteMany({ folderId: folderId });
        res.status(200).json({ successMsg: "Posts deleted successfully" });

    } catch (err) {
        console.log("ERROR OCCOURED WHILE DELETING POST", err);
        res.status(500).json({ errorMsg: "Server error" }) //500 for server error
    }
};




// route:  PATCH /api/favouritePosts/:id
// desc:   Updating a post by post id
const updatePost = async (req, res) => {

    const validationErrors = validationResult(req);
    if (!validationErrors.isEmpty()) {
        res.status(400).json(validationErrors.array()[0]) // 400 for bad request
    }

    else {
        const postId = req.params.id;
        const {
            index,
            title,
            maintext,
            category,
            language,
            source_domain,
            readtime,
            facebook,
            twitter,
            image_url,
            url,
            post_id,
            date_publish
        } = req.body;
        try {
            await favouritePostsModel.updateOne({ _id: postId }, {
                $set: {
                    index,
                    title,
                    maintext,
                    category,
                    language,
                    source_domain,
                    readtime,
                    facebook,
                    twitter,
                    image_url,
                    url,
                    post_id,
                    date_publish
                }
            });
            res.status(200).json({ successMsg: "Post updated successfully" });

        } catch (err) {
            console.log("ERROR OCCOURED WHILE DELETING POST", err);
            res.status(500).json({ errorMsg: "Server error" }) //500 for server error
        }
    }
};


export {
    postFavouritePost,
    getSinglePost,
    getAllPosts,
    deleteSinglePost,
    deleteAllPosts,
    updatePost
};