import { validationResult} from "express-validator";
import customTopicsModel from "../models/customTopicsModel.js"



//route: POST api/customTopics/createcustomtopic
//desc:  creating a custom topic by user id.
const createCustomTopic = async (req, res) => {
    try {
        const validationErrors = validationResult(req);
        if (!validationErrors.isEmpty()) {
            res.status(400).json(validationErrors.array()[0]);
        }


        else {

            const topicsFields = {};
            topicsFields.selection = {};
            topicsFields.filters = {};

            // topicsFields.user_id = req.userId;
            topicsFields.userId = "617bcd2b666de38527fe3a94";

            if (req.body.name != undefined) {
                topicsFields.name = req.body.name;
            }

            if (req.body.match_type != undefined) {
                topicsFields.selection.match_type = req.body.match_type;
            }


            if (req.body.sources != undefined) {
                topicsFields.selection.sources = req.body.sources; // ignore for now
            }

            if (req.body.any_keywords != undefined) {
                topicsFields.selection.any_keywords = req.body.any_keywords;
            }


            if (req.body.must_also_keywords != undefined) {
                topicsFields.selection.must_also_keywords = req.body.must_also_keywords;
            }


            if (req.body.must_not_contains_keywords != undefined) {
                topicsFields.selection.must_not_contains_keywords =
                    req.body.must_not_contains_keywords;
            }

            if (req.body.include_domains != undefined) {
                topicsFields.selection.include_domains = req.body.include_domains;
            }

            if (req.body.exclude_domains != undefined) {
                topicsFields.selection.exclude_domains = req.body.exclude_domains;
            }

            if (req.body.limit_domains_results != undefined) {
                topicsFields.selection.limit_domains_results =
                    req.body.limit_domains_results;
            }

            if (req.body.type != undefined) topicsFields.filters.type = req.body.type; // ignore for now
            if (req.body.sort != undefined) topicsFields.filters.sort = req.body.sort; // ignore for now
            if (req.body.enddate != undefined) topicsFields.filters.enddate = req.body.enddate;
            if (req.body.startdate != undefined) topicsFields.filters.startdate = req.body.startdate;
            if (req.body.language != undefined) topicsFields.filters.language = req.body.language;
            if (req.body.engagement != undefined) topicsFields.filters.engagement = req.body.engagement; // ignore for now


            try {
                const newCustomTopic = new customTopicsModel(topicsFields);
                const result = await newCustomTopic.save();
                console.log(result)
                res.status(201).json({ successMsg: "Topic created successfully" });

            } catch (err) {
                res.status(500).json({ errorMsg: "Server Error" });
                console.log("ERROR OCCOURED WHILE CREATING A CUSTOM TOPIC", err);
            }
        }
    } catch (err) {
        return res.status(500).json({ errorMsg: err.message });
        console.log("ERROR OCCOURED WHILE CREATING A CUSTOM TOPIC", err);
    }

};


//route: GET api/customTopics/getcustomtopic/:id
//desc:  reading a custom topic by topic id.
const getCustomTopic = async (req, res) => {
    try {
        const customTopic = await customTopicsModel.findById(req.params.id);

        if (!customTopic) {
            res.status(404).json({ errorMsg: "topic not found" });
        }
        else {
            res.status(200).json(customTopic)
        }

    } catch (err) {
        return res.status(500).json({ errorMsg: "Server Error" });
        console.log("ERROR OCCOURED WHILE READING A CUSTOM TOPIC", err);
    }
};


//route: GET api/customTopics/getcustomtopics
//desc:  reading all custom topics by user id.
const getCustomTopics = async (req, res) => {

    try {
        // id = req.userId; 
        const id = "617bcd2b666de38527fe3a94";
        const customTopics = await customTopicsModel.find({ userId: id });

        if (customTopics.length == 0) {
            res.status(404).json({ errorMsg: "topics not found" });
        }
        else {
            res.status(200).json(customTopics);
        }

    } catch (err) {
        res.status(500).json({ errorMsg: "Server Error" });
        console.log("ERROR OCCOURED WHILE READING CUSTOM TOPICs", err);
    }

};



//route: DELETE api/customTopics/deletecustomtopic/:id
//desc:  deleting a custom topic by topic id.
const deleteCustomTopic = async (req, res) => {
    try {
        await customTopicsModel.deleteOne({ _id: req.params.id });
        res.status(200).json({ successMsg: "Topic deleted successfully." });
    } catch (err) {
        return res.status(500).json({ errorMsg: "Server Error" });
        console.log("ERROR OCCOURED WHILE DELETING CUSTOM TOPIC", err);
    }
};



//route: PATCH api/customTopics/updatecustomtopic/:id
//desc:  updating a custom topic by topic id.
const updateCustomTopic = async (req, res) => {
    try {

        const topicsFields = {};
        topicsFields.selection = {};
        topicsFields.filters = {};

        if (req.body.name != undefined) {
            topicsFields.name = req.body.name;
        }

        if (req.body.match_type)
            topicsFields.selection.match_type = req.body.match_type;
        if (req.body.sources) topicsFields.selection.sources = req.body.sources;

        if (req.body.any_keywords != undefined) {
            topicsFields.selection.any_keywords = req.body.any_keywords;
        }

        if (req.body.must_also_keywords != undefined) {
            topicsFields.selection.must_also_keywords = req.body.must_also_keywords;
        }

        if (req.body.must_not_contains_keywords != undefined) {
            topicsFields.selection.must_not_contains_keywords =
                req.body.must_not_contains_keywords;
        }

        if (req.body.include_domains != undefined) {
            topicsFields.selection.include_domains = req.body.include_domains;
        }

        if (req.body.exclude_domains != undefined) {
            topicsFields.selection.exclude_domains = req.body.exclude_domains;
        }

        if (req.body.limit_domains_results != undefined) {
            topicsFields.selection.limit_domains_results =
                req.body.limit_domains_results;
        }

        if (req.body.type != undefined) topicsFields.filters.type = req.body.type;
        if (req.body.sort != undefined) topicsFields.filters.sort = req.body.sort;
        if (req.body.enddate != undefined) topicsFields.filters.enddate = req.body.enddate;
        if (req.body.startdate != undefined) topicsFields.filters.startdate = req.body.startdate;
        if (req.body.language != undefined) topicsFields.filters.language = req.body.language;
        if (req.body.engagement != undefined) topicsFields.filters.engagement = req.body.engagement;

        try {
            await customTopicsModel.findOneAndUpdate(
                { _id: req.params.id },
                { $set: topicsFields }
            );
            res.status(200).json({ successMsg: "Edited successfully" });

        } catch (err) {
            res.status(500).json({ errorMsg: "Server Error" });
            console.log("ERROR OCCOURED WHILE UPDATING CUSTOM TOPIC", err);
        }
    } catch (err) {
        return res.status(500).json({ errorMsg: "Server Error" });
        console.log("ERROR OCCOURED WHILE UPDATING CUSTOM TOPIC", err);
    }
};


// EXPORTS 

export {
    updateCustomTopic,
    deleteCustomTopic,
    getCustomTopics,
    getCustomTopic,
    createCustomTopic
};