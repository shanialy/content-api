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
    searchBy_searchTerm_Date_Category_Language,
} from "../models/articleModel.js";
import client from "../config/redisConfig.js";




// route: GET /api/article/category
// desc:  getting all categories from ES and caching.
const getCategories = async (req, res) => {
    const categories = "categories";
    try {
        client.get(categories, async (err, redisData) => {
            if (err) console.log("error occoured while fetching datat from redis");
            if (redisData !== null) {
                res.status(200).json(JSON.parse(redisData));
            } else {
                const elk = await getCategory();
                client.setex(categories, 3600, JSON.stringify(elk));
                res.status(200).json(elk);
            }
        });

    } catch (error) {
        console.log("ELASTIC SEARCH CATEGORY FETCHING ERROR", error);
        res.status(404).json("getCategory went wrong");
    }
};




// route: POST /api/article/
// desc:  getting filers from user and returning articles and caching.
const postData = async (req, res) => {
    const { searchTerm, language, category, offset, startDate, endDate } =
        req.body;



    // get all data
    if (
        searchTerm == "notset" &&
        startDate == "notset" &&
        category == "notset" &&
        language == "notset"
    ) {
        try {
            client.get("all_data" + offset,
                async (err, redisData) => {
                    if (err) console.log("error occoured while fetching datat from redis");
                    if (redisData !== null) {
                        res.status(200).json(JSON.parse(redisData));
                    } else {
                        const data = await getAllWithDateFacet(offset);
                        client.setex("all_data" + offset, 3600, JSON.stringify(data));
                        res.status(200).json(data);
                    }
                });
        } catch (err) {
            res.status(500).json({ errorMsg: "Server error" });
        }
    }





    // searchBy_Language
    if (
        searchTerm == "notset" &&
        startDate == "notset" &&
        category == "notset" &&
        language !== "notset"
    ) {
        client.get("articlesBy_" + language + offset,
            async (err, redisData) => {

                if (redisData !== null) {
                    res.status(200).json(JSON.parse(redisData));
                } else {
                    const data1 = await searchBy_Language(language, offset);
                    client.setex("articlesBy_" + language + offset, 3600, JSON.stringify(data1));
                    res.status(200).json(data1);
                }
            });
    }




    // searchBy_Category
    if (
        searchTerm == "notset" &&
        startDate == "notset" &&
        category !== "notset" &&
        language == "notset"
    ) {
        client.get("articlesBy_" + category + offset,
            async (err, data) => {
                if (err) console.log("error occoured while fetching datat from redis");
                if (data !== null) {
                    res.status(200).json(JSON.parse(data));
                } else {
                    const data1 = await searchBy_Category(category, offset);
                    client.setex("articlesBy_" + category + offset, 3600, JSON.stringify(data1));
                    res.status(200).json(data1);
                }
            });
    }




    // searchBy_Category_Language
    if (
        searchTerm == "notset" &&
        startDate == "notset" &&
        category !== "notset" &&
        language !== "notset"
    ) {
        client.get("articlesBy_" + category + language + offset,
            async (err, data) => {
                if (err) console.log("error occoured while fetching datat from redis");
                if (data !== null) {
                    res.status(200).json(JSON.parse(data));
                } else {
                    const data1 = await searchBy_Category_Language(category, language, offset);
                    client.setex(
                        "articlesBy_" + category + language + offset,
                        3600,
                        JSON.stringify(data1)
                    );
                    res.status(200).json(data1);
                }
            });
    }




    // searchBy_Date
    if (
        searchTerm == "notset" &&
        startDate !== "notset" &&
        category == "notset" &&
        language == "notset"
    ) {
        client.get("articlesBy_" + startDate + offset,
            async (err, data) => {
                if (err) console.log("error occoured while fetching datat from redis");
                if (data !== null) {
                    res.status(200).json(JSON.parse(data));
                } else {
                    const data1 = await searchBy_Date(startDate, endDate, + offset);
                    client.setex("articlesBy_" + startDate + offset, 3600, JSON.stringify(data1));
                    res.status(200).json(data1);
                }
            });
    }





    // searchBy_Date_language
    if (
        searchTerm == "notset" &&
        startDate !== "notset" &&
        category == "notset" &&
        language !== "notset"
    ) {
        client.get("articlesBy_" + startDate + language + offset,
            async (err, data) => {
                if (err) console.log("error occoured while fetching datat from redis");
                if (data !== null) {
                    res.status(200).json(JSON.parse(data));
                } else {
                    const data1 = await searchBy_Date_language(startDate, endDate, language, offset);
                    client.setex("articlesBy_" + startDate + language + offset, 3600, JSON.stringify(data1));
                    res.status(200).json(data1);
                }
            });
    }




    // searchBy_Date_Category
    if (
        searchTerm == "notset" &&
        startDate !== "notset" &&
        category !== "notset" &&
        language == "notset"
    ) {
        client.get("articlesBy_" + startDate + category + offset,
            async (err, data) => {
                if (err) console.log("error occoured while fetching datat from redis");
                if (data !== null) {
                    res.status(200).json(JSON.parse(data));
                } else {
                    const data1 = await searchBy_Date_Category(startDate, endDate, category, offset);
                    client.setex("articlesBy_" + startDate + category + offset, 3600, JSON.stringify(data1));
                    res.status(200).json(data1);
                }
            });
    }





    // searchBy_Date_Category_language
    if (
        searchTerm == "notset" &&
        startDate !== "notset" &&
        category !== "notset" &&
        language !== "notset"
    ) {
        client.get("articlesBy_" + startDate + category + language + offset,
            async (err, data) => {
                if (err) console.log("error occoured while fetching datat from redis");
                if (data !== null) {
                    res.status(200).json(JSON.parse(data));
                } else {
                    const data1 = await searchBy_Date_Category_language(
                        startDate,
                        endDate,
                        category,
                        language,
                        offset
                    );
                    client.setex(
                        "articlesBy_" + startDate + category + language + offset,
                        3600,
                        JSON.stringify(data1)
                    );
                    res.status(200).json(data1);
                }
            });
    }




    // searchBy_SearchTerm
    if (
        searchTerm !== "notset" &&
        startDate == "notset" &&
        category == "notset" &&
        language == "notset"
    ) {
        const data = await searchBy_SearchTerm(searchTerm, offset);
        res.status(200).json(data);
    }




    // searchBy_searchTerm_Language
    if (
        searchTerm !== "notset" &&
        startDate == "notset" &&
        category == "notset" &&
        language !== "notset"
    ) {
        const data = await searchBy_searchTerm_Language(searchTerm, language, offset);
        res.status(200).json(data);
    }




    // searchBy_SearchTerm_Category
    if (
        searchTerm !== "notset" &&
        startDate == "notset" &&
        category !== "notset" &&
        language == "notset"
    ) {
        const data = await searchBy_SearchTerm_Category(searchTerm, category, offset);
        res.status(200).json(data);
    }





    // searchBy_SearchTerm_Category_language
    if (
        searchTerm !== "notset" &&
        startDate == "notset" &&
        category !== "notset" &&
        language !== "notset"
    ) {
        const data = await searchBy_SearchTerm_Category_language(
            searchTerm,
            category,
            language, offset
        );
        res.status(200).json(data);
    }




    // searchBy_SearchTerm_Date
    if (
        searchTerm !== "notset" &&
        startDate !== "notset" &&
        category == "notset" &&
        language == "notset"
    ) {
        const data = await searchBy_SearchTerm_Date(searchTerm, startDate, endDate, offset);
        res.status(200).json(data);
    }



    // searchBy_searchTerm_Date_Language
    if (
        searchTerm !== "notset" &&
        startDate !== "notset" &&
        category == "notset" &&
        language !== "notset"
    ) {
        const data = await searchBy_searchTerm_Date_Language(
            searchTerm,
            startDate,
            endDate,
            language,
            offset
        );
        res.status(200).json(data);
    }




    // searchBy_searchTerm_Date_Category
    if (
        searchTerm !== "notset" &&
        startDate !== "notset" &&
        category !== "notset" &&
        language == "notset"
    ) {
        const data = await searchBy_searchTerm_Date_Category(
            searchTerm,
            endDate,
            startDate,
            category,
            offset
        );
        res.status(200).json(data);
    }



    // searchBy_searchTerm_Date_Category_Language
    if (
        searchTerm !== "notset" &&
        startDate !== "notset" &&
        category !== "notset" &&
        language !== "notset"
    ) {
        const data = await searchBy_searchTerm_Date_Category_Language(
            searchTerm,
            category,
            language,
            endDate,
            startDate,
            offset
        );
        res.status(200).json(data);
    }
};


export { getCategories, postData };