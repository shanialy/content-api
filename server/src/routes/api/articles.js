import express from "express";
import redis from "redis";
import {
  getCategory,
  getAllWithDateFacet,
  searchBy_Language,
  searchBy_Category,
  searchBy_Category_Language,
  searchBy_Date,
  searchBy_Date_language,
  searchBy_Date_Category,
  searchBy_Date_Category_language,
  searchBy_SearchTerm,
  searchBy_searchTerm_Language,
  searchBy_SearchTerm_Category,
  searchBy_SearchTerm_Category_language,
  searchBy_SearchTerm_Date,
  searchBy_searchTerm_Date_Language,
  searchBy_searchTerm_Date_Category,
  searchBy_searchTerm_Date_Category_Language
} from "../../models/searchModel.js";
import {body, validationResult} from "express-validator"

const router = express.Router();
const REDIS_PORT = process.env.PORT || 6379;

const client = redis.createClient(REDIS_PORT);

const redisMiddleware = (req, res, next) => {
  try {
    client.get("saad", (err, data) => {
      if (err) console.log("error occoured while fetching datat from redis");

      if (data !== null) {
        console.log("inside  redis middleware")
        res.status(200).json(JSON.parse(data))
      }
      else {
        next();
      }
    });
  } catch (error) {
    console.log("error occoured while fetching datat from redis", error)
    res.status(404).json("getCategory went wrong");
  }
};

router.get("/category", redisMiddleware, async (req, res) => {
  try {
    let suggestionsArray = [];
    const username = "category";
    const elk = await getCategory();
    client.setex(username, 3600, JSON.stringify(elk));

    res.status(200).json(elk);
  } catch (error) {
    console.log("ELASTIC SEARCH CATEGORY FETCHING ERROR", error)
    res.status(404).json("getCategory went wrong");
  }

});



// router.get("/getall", async (req, res) => {
//   try {


//     let suggestionsArray = [];
//     const elk = await getAllWithDateFacet(req.params.val);

//     res.status(200).json(elk);

//   } catch (error) {
//     res.status(404).json(
//       "getAll went wrong"
//     );

//   }

// }
// );



router.post("/", (req, res) => {

  const { searchTerm, language, category, offset, startDate, endDate } = req.body;

  if (searchTerm == "notset" && startDate == "notset" && category == "notset" && language !== "notset") {
    const data = searchBy_Language(language);
    res.status(200).json(data);
  }

  if (searchTerm == "notset" && startDate == "notset" && category !== "notset" && language == "notset") {
    const data = searchBy_Category(category);
    res.status(200).json(data);
  }

  if (searchTerm == "notset" && startDate == "notset" && category !== "notset" && language !== "notset") {
    const data = searchBy_Category_Language(category, language);
    res.status(200).json(data);
  }

  if (searchTerm == "notset" && startDate !== "notset" && category == "notset" && language == "notset") {
    const data = searchBy_Date(startDate, endDate);
    res.status(200).json(data);
  }

  if (searchTerm == "notset" && startDate !== "notset" && category == "notset" && language !== "notset") {
    const data = searchBy_Date_language(startDate, endDate, language);
    res.status(200).json(data);
  }

  if (searchTerm == "notset" && startDate !== "notset" && category !== "notset" && language == "notset") {
    const data = searchBy_Date_Category(startDate, endDate, category);
    res.status(200).json(data);
  }

  if (searchTerm == "notset" && startDate !== "notset" && category !== "notset" && language !== "notset") {
    const data = searchBy_Date_Category_language(startDate, endDate, category, language);
    res.status(200).json(data);
  }

  if (searchTerm !== "notset" && startDate == "notset" && category == "notset" && language == "notset") {
    const data = searchBy_SearchTerm(searchTerm);
    res.status(200).json(data);
  }

  if (searchTerm !== "notset" && startDate == "notset" && category == "notset" && language !== "notset") {
    const data = searchBy_searchTerm_Language(searchTerm, language);
    res.status(200).json(data);
  }

  if (searchTerm !== "notset" && startDate == "notset" && category !== "notset" && language == "notset") {
    const data = searchBy_SearchTerm_Category(searchTerm, category);
    res.status(200).json(data);
  }

  if (searchTerm !== "notset" && startDate == "notset" && category !== "notset" && language !== "notset") {
    const data = searchBy_SearchTerm_Category_language(searchTerm, category, language);
    res.status(200).json(data);
  }

  if (searchTerm !== "notset" && startDate !== "notset" && category == "notset" && language == "notset") {
    const data = searchBy_SearchTerm_Date(searchTerm, startDate, endDate);
    res.status(200).json(data);
  }

  if (searchTerm !== "notset" && startDate !== "notset" && category == "notset" && language !== "notset") {
    const data = searchBy_searchTerm_Date_Language(searchTerm, startDate, endDate, language);
    res.status(200).json(data);
  }

  if (searchTerm !== "notset" && startDate !== "notset" && category !== "notset" && language == "notset") {
    const data = searchBy_searchTerm_Date_Category(searchTerm, endDate, startDate, category);
    res.status(200).json(data);
  }

  if (searchTerm !== "notset" && startDate !== "notset" && category !== "notset" && language !== "notset") {
    const data = searchBy_searchTerm_Date_Category_Language(searchTerm, category, language, endDate, startDate);
    res.status(200).json(data);
  }


});


export default router;