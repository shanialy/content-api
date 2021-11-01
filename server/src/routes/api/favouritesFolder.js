import express from "express"
const router = express.Router();
import {
    postFavouriteFolder,
    getSingleFavouriteFolder,
    getAllFavouriteFolder,
    deleteSingleFolder,
    deleteAllfavouritesFolder,
    updateFavouriteFolder
} from "../../controllers/favouritesFolderController.js"
import {
    postFavouritesFolderValidation,
    updateFavouriteFolderValidation
} from "../validations/favouritesFolderValidation.js";



// route:  POST /api/favouritesFolder/
// desc:   creating favourites folder by user id
router.post("/", postFavouritesFolderValidation , postFavouriteFolder);



// route:  GET /api/favouritesFolder/folder/:id
// desc:   sending a single folder by folder id
router.get("/folder/:id", getSingleFavouriteFolder);




// route:  GET /api/favouritesFolder/all_folders/:id
// desc:   sending all user folders by user id
router.get("/all_folders/:id", getAllFavouriteFolder);




// route:  DELETE /api/favouritesFolder/folder/:id
// desc:   deleting a single folders by folder id
router.delete("/folder/:id", deleteSingleFolder);




// route:  DELETE /api/favouritesFolder/all_folders/:id
// desc:   deleting all folders by user id
router.delete("/all_folders/:id", deleteAllfavouritesFolder);



// route:  PATCH /api/favouritesFolder/:id
// desc:   updating a folders by folder id
router.patch("/:id",updateFavouriteFolderValidation ,updateFavouriteFolder);

export default router;