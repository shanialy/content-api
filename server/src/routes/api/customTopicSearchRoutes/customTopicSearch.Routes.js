import express from "express"
import { postValidation, patchvalidation } from "../../../validations/customTopicSearchValidation/customTopicSearch.Validation.js"
import {
  updateCustomTopic,
  deleteCustomTopic,
  getCustomTopics,
  getCustomTopic,
  createCustomTopic
} from "../../../controllers/customTopicSearchControllers/customTopicSearch.Controller.js"
import customTopicSearchModel from "../../../models/customTopicSearchModel/customTopicSearch.Model.js";
const router = express.Router();



//route: POST api/customTopics/createcustomtopic
//desc:  creating a custom topic by user id.
router.post('/createcustomtopic', postValidation, createCustomTopic);


//route: GET api/customTopics/getcustomtopic/:id
//desc:  reading a custom topic by topic id.
router.get("/getcustomtopic/:id", getCustomTopic);


//route: GET api/customTopics/getcustomtopics
//desc:  reading all custom topics by user id.
router.get("/getcustomtopics", getCustomTopics);


//route: DELETE api/customTopics/deletecustomtopic/:id
//desc:  deleting a custom topic by topic id.
router.delete('/deletecustomtopic/:id', deleteCustomTopic);



//route: PATCH api/customTopics/updatecustomtopic/:id
//desc:  updating a custom topic by topic id.
router.patch('/updatecustomtopic/:id', patchvalidation, updateCustomTopic);




export const getContentByCustomTopic = async (req, res) => {
  try {
    const topic = await customTopicSearchModel.findById(req.params.id)
    const data = await getByCustomTopics(topic, req.params.offset); // elastic search query function

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ errorMsg: "Server Error" });
    console.log(err.message);
    console.log("ERROR OCCOURED WHILE FETCHING DATA FROM ELASTIC SEARCH", err);
  }
};
// route:  /api/customTopicSearch/:id/:offset 
// desc:   reading data from elastic_search by getting query from customTopicsSearch.model by topic id
router.get("/getcontetbycustomtopic/:id/:offset", getContentByCustomTopic);

export default router;