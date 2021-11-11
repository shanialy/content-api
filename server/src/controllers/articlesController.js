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
import client, {
    esRedisGlobalKey,
    esRedisExpireTime
} from "../config/redisConfig.js";




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
        res.status(500).json({ errorMsg: "Server Error" });
        console.log("ELASTIC SEARCH CATEGORY FETCHING ERROR", error);
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
            res.status(500).json({ errorMsg: "Server Error" });
            console.log("ELASTIC SEARCH DATA FETCHING ERROR", err);
        }
    }





    // searchBy_Language
    if (
        searchTerm == "notset" &&
        startDate == "notset" &&
        category == "notset" &&
        language !== "notset"
    ) {
        try {
            const data = await searchBy_Language(language, offset);
            client.hset(esRedisGlobalKey, JSON.stringify(req.body), JSON.stringify(data));
            client.expire(esRedisGlobalKey, esRedisExpireTime);
            res.status(200).json(data);
        }
        catch (err) {
            res.status(500).json({ errorMsg: "Server Error" });
            console.log("ELASTIC SEARCH DATA FETCHING ERROR", err);
        }
    }




    // searchBy_Category
    if (
        searchTerm == "notset" &&
        startDate == "notset" &&
        category !== "notset" &&
        language == "notset"
    ) {
        try {
            const data = await searchBy_Category(category, offset);
            client.hset(esRedisGlobalKey, JSON.stringify(req.body), JSON.stringify(data));
            client.expire(esRedisGlobalKey, esRedisExpireTime);
            res.status(200).json(data);
        }
        catch (err) {
            res.status(500).json({ errorMsg: "Server Error" });
            console.log("ELASTIC SEARCH DATA FETCHING ERROR", err);
        }
    }




    // searchBy_Category_Language
    if (
        searchTerm == "notset" &&
        startDate == "notset" &&
        category !== "notset" &&
        language !== "notset"
    ) {
        try {
            const data = await searchBy_Category_Language(category, language, offset);
            client.hset(esRedisGlobalKey, JSON.stringify(req.body), JSON.stringify(data));
            client.expire(esRedisGlobalKey, esRedisExpireTime);
            res.status(200).json(data);
        } catch (err) {
            res.status(500).json({ errorMsg: "Server Error" });
            console.log("ELASTIC SEARCH DATA FETCHING ERROR", err);
        }
    }




    // searchBy_Date
    if (
        searchTerm == "notset" &&
        startDate !== "notset" &&
        category == "notset" &&
        language == "notset"
    ) {
        try {
            const data = await searchBy_Date(startDate, endDate, + offset);
            client.hset(esRedisGlobalKey, JSON.stringify(req.body), JSON.stringify(data));
            client.expire(esRedisGlobalKey, esRedisExpireTime);
            res.status(200).json(data);
        }
        catch (err) {
            res.status(500).json({ errorMsg: "Server Error" });
            console.log("ELASTIC SEARCH DATA FETCHING ERROR", err);
        }
    }





    // searchBy_Date_language
    if (
        searchTerm == "notset" &&
        startDate !== "notset" &&
        category == "notset" &&
        language !== "notset"
    ) {
        try {
            const data = await searchBy_Date_language(startDate, endDate, language, offset);
            client.hset(esRedisGlobalKey, JSON.stringify(req.body), JSON.stringify(data));
            client.expire(esRedisGlobalKey, esRedisExpireTime);
            res.status(200).json(data);
        }
        catch (err) {
            res.status(500).json({ errorMsg: "Server Error" });
            console.log("ELASTIC SEARCH DATA FETCHING ERROR", err);
        }
    }




    // searchBy_Date_Category
    if (
        searchTerm == "notset" &&
        startDate !== "notset" &&
        category !== "notset" &&
        language == "notset"
    ) {
        try {

            const data = await searchBy_Date_Category(startDate, endDate, category, offset);
            client.hset(esRedisGlobalKey, JSON.stringify(req.body), JSON.stringify(data));
            client.expire(esRedisGlobalKey, esRedisExpireTime);
            res.status(200).json(data);
        }
        catch (err) {
            res.status(500).json({ errorMsg: "Server Error" });
            console.log("ELASTIC SEARCH DATA FETCHING ERROR", err);
        }
    }





    // searchBy_Date_Category_language
    if (
        searchTerm == "notset" &&
        startDate !== "notset" &&
        category !== "notset" &&
        language !== "notset"
    ) {
        try {

            const data = await searchBy_Date_Category_language(
                startDate,
                endDate,
                category,
                language,
                offset
            );
            client.hset(esRedisGlobalKey, JSON.stringify(req.body), JSON.stringify(data));
            client.expire(esRedisGlobalKey, esRedisExpireTime);
            res.status(200).json(data);
        }
         catch (err) {
            res.status(500).json({ errorMsg: "Server Error" });
            console.log("ELASTIC SEARCH DATA FETCHING ERROR", err);
        }
    }




    // searchBy_SearchTerm
    if (
        searchTerm !== "notset" &&
        startDate == "notset" &&
        category == "notset" &&
        language == "notset"
    ) {
        try {
            const data = await searchBy_SearchTerm(searchTerm, offset);
            res.status(200).json(data);
        } catch (err) {
            res.status(500).json({ errorMsg: "Server Error" });
            console.log("ELASTIC SEARCH DATA FETCHING ERROR", err);
        }
    }




    // searchBy_searchTerm_Language
    if (
        searchTerm !== "notset" &&
        startDate == "notset" &&
        category == "notset" &&
        language !== "notset"
    ) {
        try {

            const data = await searchBy_searchTerm_Language(searchTerm, language, offset);
            res.status(200).json(data);
        } catch (err) {
            res.status(500).json({ errorMsg: "Server Error" });
            console.log("ELASTIC SEARCH DATA FETCHING ERROR", err);
        }
    }




    // searchBy_SearchTerm_Category
    if (
        searchTerm !== "notset" &&
        startDate == "notset" &&
        category !== "notset" &&
        language == "notset"
    ) {
        try {

            const data = await searchBy_SearchTerm_Category(searchTerm, category, offset);
            res.status(200).json(data);
        } catch (err) {
            res.status(500).json({ errorMsg: "Server Error" });
            console.log("ELASTIC SEARCH DATA FETCHING ERROR", err);
        }
    }





    // searchBy_SearchTerm_Category_language
    if (
        searchTerm !== "notset" &&
        startDate == "notset" &&
        category !== "notset" &&
        language !== "notset"
    ) {
        try {

            const data = await searchBy_SearchTerm_Category_language(
                searchTerm,
                category,
                language, offset
            );
            res.status(200).json(data);
        } catch (err) {
            res.status(500).json({ errorMsg: "Server Error" });
            console.log("ELASTIC SEARCH DATA FETCHING ERROR", err);
        }
    }




    // searchBy_SearchTerm_Date
    if (
        searchTerm !== "notset" &&
        startDate !== "notset" &&
        category == "notset" &&
        language == "notset"
    ) {
        try {

            const data = await searchBy_SearchTerm_Date(searchTerm, startDate, endDate, offset);
            res.status(200).json(data);
        } catch (err) {
            res.status(500).json({ errorMsg: "Server Error" });
            console.log("ELASTIC SEARCH DATA FETCHING ERROR", err);
        }
    }



    // searchBy_searchTerm_Date_Language
    if (
        searchTerm !== "notset" &&
        startDate !== "notset" &&
        category == "notset" &&
        language !== "notset"
    ) {
        try {

            const data = await searchBy_searchTerm_Date_Language(
                searchTerm,
                startDate,
                endDate,
                language,
                offset
            );
            res.status(200).json(data);
        } catch (err) {
            res.status(500).json({ errorMsg: "Server Error" });
            console.log("ELASTIC SEARCH DATA FETCHING ERROR", err);
        }
    }




    // searchBy_searchTerm_Date_Category
    if (
        searchTerm !== "notset" &&
        startDate !== "notset" &&
        category !== "notset" &&
        language == "notset"
    ) {
        try {

            const data = await searchBy_searchTerm_Date_Category(
                searchTerm,
                endDate,
                startDate,
                category,
                offset
            );
            res.status(200).json(data);
        } catch (err) {
            res.status(500).json({ errorMsg: "Server Error" });
            console.log("ELASTIC SEARCH DATA FETCHING ERROR", err);
        }
    }



    // searchBy_searchTerm_Date_Category_Language
    if (
        searchTerm !== "notset" &&
        startDate !== "notset" &&
        category !== "notset" &&
        language !== "notset"
    ) {
        try {

            const data = await searchBy_searchTerm_Date_Category_Language(
                searchTerm,
                category,
                language,
                endDate,
                startDate,
                offset
            );
            res.status(200).json(data);
        } catch (err) {
            res.status(500).json({ errorMsg: "Server Error" });
            console.log("ELASTIC SEARCH DATA FETCHING ERROR", err);
        }
    }
};


export { getCategories, postData };