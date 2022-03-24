import express from "express";
import {
  postValidation,
  patchvalidation,
} from "../../../validations/customTopicSearchValidation/customTopicSearch.Validation.js";
import {
  updateCustomTopic,
  deleteCustomTopic,
  getCustomTopics,
  getCustomTopic,
  createCustomTopic,
  getContentByCustomTopic,
} from "../../../controllers/customTopicSearchControllers/customTopicSearch.Controller.js";
import customTopicSearchModel from "../../../models/customTopicSearchModel/customTopicSearch.Model.js";
import { getByCustomTopics } from "../../../services/customTopicSearchServices/customTopicSearch.Service.js";
import authorize from "../../../middlewares/authorize.js";
const router = express.Router();

//route: POST api/customTopicSearch/createcustomtopic
//desc:  creating a custom topic by user id.
// access: PROTECTED
router.post(
  "/createcustomtopic",
  authorize(),
  // postValidation,
  createCustomTopic
);

//route: GET api/customTopicSearch/getcustomtopic/:id
//desc:  reading a custom topic by topic id.
// access: PROTECTED
router.get("/getcustomtopic/:id", authorize(), getCustomTopic);

//route: GET api/customTopicSearch/getcustomtopics
//desc:  reading all custom topics by user id.
// access: PROTECTED
router.get("/getcustomtopics", authorize(), getCustomTopics);

//route: DELETE api/customTopicSearch/deletecustomtopic/:id
//desc:  deleting a custom topic by topic id.
// access: PROTECTED
router.delete("/deletecustomtopic/:id", authorize(), deleteCustomTopic);

//route: PATCH api/customTopicSearch/updatecustomtopic/:id
//desc:  updating a custom topic by topic id.
// access: PROTECTED
router.patch(
  "/updatecustomtopic/:id",
  authorize(),
  patchvalidation,
  updateCustomTopic
);
// , patchvalidation

// route:  /api/customTopicSearch/:id/:offset
// desc:   reading data from elastic_search by getting query from customTopicsSearch.model by topic id
// access: PROTECTED
router.get(
  "/getcontetbycustomtopic/:id/:offset",
  authorize(),
  getContentByCustomTopic
);

export default router;
