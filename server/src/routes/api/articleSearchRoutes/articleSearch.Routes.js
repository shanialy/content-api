import express from "express";
import {getCategories , postData} from "../../../controllers/articleSearchControllers/articlesSearch.Controller.js"
import esRedisMiddleware from "../../../middlewares/esRedisMiddleware.js"


const router = express.Router();

// route: GET /api/article/category
// desc:  getting all categories from ES and caching. 
router.get("/category", getCategories);


// route: POST /api/article/
// desc:  getting filers from user and returning articles and caching. 
router.post("/", esRedisMiddleware, postData);

export default router;
