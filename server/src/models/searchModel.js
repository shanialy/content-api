import { client, index } from "../config/elasticSearchConnection.js";

const getCategory = () => {
    return client.search({
        index: index,
        body: {
            size: 0,
            aggs: {
                categories: {
                    terms: {
                        field: "category",
                    },
                },

                languages: {
                    terms: {
                        field: "language",
                    },
                },
            },
        },
    });
};


const getAllWithDateFacet = (offset) => {


    return client.search({
        index: index,
        body: {
            size: 20,
            from: offset,
            query: {
                bool: {
                    filter: [
                        {
                            range: {
                                date_download: {
                                    gte: "2021-11-02",
                                    lt: "2021-11-03",
                                },
                            },
                        },
                    ],
                },
            },
        },
    });
};


const searchBy_Language = async (language) => {
    await consle.log(language);    
    return (language) };


const searchBy_Category = (category) => { return (category) };


const searchBy_Category_Language = (category, language) => { return (category + language) };


const searchBy_Date = (startDate, endDate) => { return (startDate + endDate) };


const searchBy_Date_language = (startDate, endDate, language) => { return (startDate + endDate + language) };


const searchBy_Date_Category = (startDate, endDate, category) => { return (startDate + endDate + category) };


const searchBy_Date_Category_language = (startDate, endDate, category, language) => { return (startDate + endDate + category + language) };


const searchBy_SearchTerm = (searchTerm) => { return (searchTerm) };


const searchBy_searchTerm_Language = (searchTerm, language) => { return (searchTerm + language) };


const searchBy_SearchTerm_Category = (searchTerm, category) => { return (searchTerm + category) };


const searchBy_SearchTerm_Category_language = (searchTerm, category, language) => { return (searchTerm + category + language) };


const searchBy_SearchTerm_Date = (searchTerm, startDate, endDate) => { return (searchTerm + startDate + endDate) };


const searchBy_searchTerm_Date_Language = (searchTerm, startDate, endDate, language) => { return (searchTerm + startDate + endDate + language) };


const searchBy_searchTerm_Date_Category = (searchTerm, endDate, startDate, category) => { return (searchTerm + startDate + endDate + category) };


const searchBy_searchTerm_Date_Category_Language = (searchTerm, category, language, endDate, startDate) => { return (searchTerm + startDate + endDate + category + language) };

export {
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
};