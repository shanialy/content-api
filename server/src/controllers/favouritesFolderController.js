import favouritesFolderModel from "../models/favouritesFolderModel.js"
import { validationResult } from "express-validator";



// route:  POST /api/favouritesFolder/
// desc:   creating favourites folder by user id
const postFavouriteFolder = async (req, res) => {

    const validationErrors = validationResult(req);
    if (!validationErrors.isEmpty()) {
        res.status(400).json(validationErrors.array()[0]) // 400 for bad request
    }

    else {

        const folderName = req.body.folderName;
        const userId = "617bcd2b666de38527fe3a94";

        try {
            const favouritesFolder = new favouritesFolderModel({
                userId: userId,
                folderName: folderName
            });
            await favouritesFolder.save();
            res.status(201).json({ successMsg: "Folder created successfully" }); //201 for created
        } catch (err) {
            console.log("ERROR OCCOURED WHILE CREATING FAVOURITE FOLDER", err);
            res.status(409).json({ msgError: "Folder not created" }); //409 for conflict
        }
    }

};





// route:  GET /api/favouritesFolder/folder/:id
// desc:   sending a single folder by folder id
const getSingleFavouriteFolder = async (req, res) => {
    try {
        const folder = await favouritesFolderModel.findOne({ _id: req.params.id });

        if (!folder) {
            res.status(404).json({ errorMsg: "Folder not found" })
        }

        res.status(200).json(folder);

    } catch (err) {
        console.log("ERROR OCCOURED WHILE GETTING FOLDER", err);
        res.status(500).json({ errorMsg: "Server error" }) // server error
    }
};




// route:  GET /api/favouritesFolder/all_folders/:id
// desc:   sending all user folders by user id
const getAllFavouriteFolder = async (req, res) => {
    try {
        const allFolders = await favouritesFolderModel.find({ userId: req.params.id });

        if (!allFolders) {
            res.status(404).json({ errorMsg: "Folder not found" })
        }

        res.status(200).json(allFolders);

    } catch (err) {
        console.log("ERROR OCCOURED WHILE GETTING FOLDER", err);
        res.status(500).json({ errorMsg: "Server error" }) // server error
    }
};




// route:  DELETE /api/favouritesFolder/folder/:id
// desc:   deleting a single folders by folder id
const deleteSingleFolder = async (req, res) => {
    try {
        await favouritesFolderModel.deleteOne({ _id: req.params.id })
        res.status(200).json({ successMsg: "Folder deleted successfully" });
    } catch (err) {
        console.log("ERROR OCCOURED WHILE DELETING FOLDER", err);
        res.status(500).json({ errorMsg: "Server error" }) // server error
    }
};



// route:  DELETE /api/favouritesFolder/all_folders/:id
// desc:   deleting all folders by user id
const deleteAllfavouritesFolder = async (req, res) => {
    try {
        await favouritesFolderModel.deleteMany({ userId: req.params.id })
        res.status(200).json({ successMsg: "Folders deleted successfully" });
    } catch (err) {
        console.log("ERROR OCCOURED WHILE DELETING FOLDER", err);
        res.status(500).json({ errorMsg: "Server error" }) // server error
    }
};




// route:  PATCH /api/favouritesFolder/:id
// desc:   updating a folders by folder id
const updateFavouriteFolder = async (req, res) => {

    const validationErrors = validationResult(req);
    if (!validationErrors.isEmpty()) {
        res.status(400).json(validationErrors.array()[0])
    }
    else {

        const folderName = req.body.folderName;
        try {
            await favouritesFolderModel.updateOne({ _id: req.params.id },
                { $set: { folderName: folderName } });
            res.status(200).json({ successMsg: "Folder Updated Successfully" });
        } catch (err) {

        }
    }
};



export { 
    postFavouriteFolder, 
    getSingleFavouriteFolder, 
    getAllFavouriteFolder,
    deleteSingleFolder,
    deleteAllfavouritesFolder,
    updateFavouriteFolder
 };