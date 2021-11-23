import express from "express"
import { postValidation, patchvalidation } from "../../../validations/customTopicSearchValidation/customTopicSearch.Validation.js"
import {
  updateCustomTopic,
  deleteCustomTopic,
  getCustomTopics,
  getCustomTopic,
  createCustomTopic,
  getContentByCustomTopic
} from "../../../controllers/customTopicSearchControllers/customTopicSearch.Controller.js"
import customTopicSearchModel from "../../../models/customTopicSearchModel/customTopicSearch.Model.js";
import {getByCustomTopics} from "../../../services/customTopicSearchServices/customTopicSearch.Service.js"
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



// route:  /api/customTopicSearch/:id/:offset 
// desc:   reading data from elastic_search by getting query from customTopicsSearch.model by topic id
router.get("/getcontetbycustomtopic/:id/:offset", getContentByCustomTopic);

export default router;