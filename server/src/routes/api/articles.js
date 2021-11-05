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
} from "../../models/articleModel.js";
import { body, validationResult } from "express-validator";
import client from "../../config/redisConfig.js"

const router = express.Router();


const redisMiddleware = (req, res, next) => {
  try {
    client.get("category", (err, data) => {
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



router.get("/getall", async (req, res) => {
  try {
    let suggestionsArray = [];
    const elk = await getAllWithDateFacet(40);

    res.status(200).json(elk);

  } catch (error) {
    res.status(404).json(
      "getAll went wrong"
    );
  }
}
);



router.post("/", async (req, res) => {

  const { searchTerm, language, category, offset, startDate, endDate } = req.body;

  // get all data
  if (searchTerm == "notset" && startDate == "notset" && category == "notset" && language == "notset") {
    try {
      client.get("all_data"+ offset, async (err, redisData) => {
        if (redisData !== null) {
          res.status(200).json(JSON.parse(redisData));
        }
        else {
          const data = await getAllWithDateFacet(offset);
          client.setex("all_data"+ offset , 3600, JSON.stringify(data));
          res.status(200).json(data);
        }
      });
    } catch (err) {
      res.status(500).json({ errorMsg: "Server error" })
    }
  }



  // searchBy_Language
  if (searchTerm == "notset" && startDate == "notset" && category == "notset" && language !== "notset") {

    client.get("articlesBy_language", (err, data) => {
      if (data !== null) {
        res.status(200).json(JSON.parse(data));
      }
      else {
        const data1 = searchBy_Language(language);
        client.setex("articlesBy_language", 3600, JSON.stringify(data1));
        res.status(200).json(data1);
      }
    });
  }

  // searchBy_Category
  if (searchTerm == "notset" && startDate == "notset" && category !== "notset" && language == "notset") {

    client.get("articlesBy_Category", (err, data) => {
      if (data !== null) {
        res.status(200).json(JSON.parse(data));
      }
      else {
        const data1 = searchBy_Category(category);
        client.setex("articlesBy_Category", 3600, JSON.stringify(data1));
        res.status(200).json(data1);
      }
    });
  }


  // searchBy_Category_Language
  if (searchTerm == "notset" && startDate == "notset" && category !== "notset" && language !== "notset") {

    client.get("articlesBy_Category_Language", (err, data) => {
      if (data !== null) {
        res.status(200).json(JSON.parse(data));
      }
      else {
        const data1 = searchBy_Category_Language(category, language);
        client.setex("articlesBy_Category_Language", 3600, JSON.stringify(data1));
        res.status(200).json(data1);
      }
    });
  }



  // searchBy_Date
  if (searchTerm == "notset" && startDate !== "notset" && category == "notset" && language == "notset") {

    client.get("articlesBy_Date", (err, data) => {
      if (data !== null) {
        res.status(200).json(JSON.parse(data));
      }
      else {
        const data1 = searchBy_Date(startDate, endDate);
        client.setex("articlesBy_Date", 3600, JSON.stringify(data1));
        res.status(200).json(data1);
      }
    });
  }


  // searchBy_Date_language
  if (searchTerm == "notset" && startDate !== "notset" && category == "notset" && language !== "notset") {

    client.get("articlesBy_Date_language", (err, data) => {
      if (data !== null) {
        res.status(200).json(JSON.parse(data));
      }
      else {
        const data1 = searchBy_Date_language(startDate, endDate, language);
        client.setex("articlesBy_Date_language", 3600, JSON.stringify(data1));
        res.status(200).json(data1);
      }
    });
  }


  // searchBy_Date_Category
  if (searchTerm == "notset" && startDate !== "notset" && category !== "notset" && language == "notset") {

    client.get("articlesBy_Date_Category", (err, data) => {
      if (data !== null) {
        res.status(200).json(JSON.parse(data));
      }
      else {
        const data1 = searchBy_Date_Category(startDate, endDate, category);
        client.setex("articlesBy_Date_Category", 3600, JSON.stringify(data1));
        res.status(200).json(data1);
      }
    });
  }


  // searchBy_Date_Category_language
  if (searchTerm == "notset" && startDate !== "notset" && category !== "notset" && language !== "notset") {

    client.get("articlesBy_Date_Category_language", (err, data) => {
      if (data !== null) {
        res.status(200).json(JSON.parse(data));
      }
      else {
        const data1 = searchBy_Date_Category_language(startDate, endDate, category, language);
        client.setex("articlesBy_Date_Category_language", 3600, JSON.stringify(data1));
        res.status(200).json(data1);
      }
    });
  }


  // searchBy_SearchTerm
  if (searchTerm !== "notset" && startDate == "notset" && category == "notset" && language == "notset") {
    const data = searchBy_SearchTerm(searchTerm);
    res.status(200).json(data);
  }


  // searchBy_searchTerm_Language
  if (searchTerm !== "notset" && startDate == "notset" && category == "notset" && language !== "notset") {
    const data = searchBy_searchTerm_Language(searchTerm, language);
    res.status(200).json(data);
  }


  // searchBy_SearchTerm_Category
  if (searchTerm !== "notset" && startDate == "notset" && category !== "notset" && language == "notset") {
    const data = searchBy_SearchTerm_Category(searchTerm, category);
    res.status(200).json(data);
  }


  // searchBy_SearchTerm_Category_language
  if (searchTerm !== "notset" && startDate == "notset" && category !== "notset" && language !== "notset") {
    const data = searchBy_SearchTerm_Category_language(searchTerm, category, language);
    res.status(200).json(data);
  }


  // searchBy_SearchTerm_Date
  if (searchTerm !== "notset" && startDate !== "notset" && category == "notset" && language == "notset") {
    const data = searchBy_SearchTerm_Date(searchTerm, startDate, endDate);
    res.status(200).json(data);
  }


  // searchBy_searchTerm_Date_Language
  if (searchTerm !== "notset" && startDate !== "notset" && category == "notset" && language !== "notset") {
    const data = searchBy_searchTerm_Date_Language(searchTerm, startDate, endDate, language);
    res.status(200).json(data);
  }


  // searchBy_searchTerm_Date_Category
  if (searchTerm !== "notset" && startDate !== "notset" && category !== "notset" && language == "notset") {
    const data = searchBy_searchTerm_Date_Category(searchTerm, endDate, startDate, category);
    res.status(200).json(data);
  }


  // searchBy_searchTerm_Date_Category_Language
  if (searchTerm !== "notset" && startDate !== "notset" && category !== "notset" && language !== "notset") {
    const data = searchBy_searchTerm_Date_Category_Language(searchTerm, category, language, endDate, startDate);
    res.status(200).json(data);
  }

});


export default router;