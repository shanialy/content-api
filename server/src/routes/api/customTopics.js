import express from "express"
import {postValidation, patchvalidation} from "../validations/customTopicsValidation.js"
import {
    updateCustomTopic,
    deleteCustomTopic,
    getCustomTopics,
    getCustomTopic,
    createCustomTopic
} from "../../controllers/customTopicsController.js"
const router = express.Router();



//route: POST api/customTopics/createcustomtopic
//desc:  creating a custom topic by user id.
router.post('/createcustomtopic', postValidation , createCustomTopic);


//route: GET api/customTopics/getcustomtopic/:id
//desc:  reading a custom topic by topic id.
router.get("/getcustomtopic/:id", getCustomTopic);


//route: GET api/customTopics/getcustomtopics/:id
//desc:  reading all custom topics by user id.
router.get("/getcustomtopics", getCustomTopics);


//route: DELETE api/customTopics/deletecustomtopic/:id
//desc:  deleting a custom topic by topic id.
router.delete('/deletecustomtopic/:id', deleteCustomTopic);


//route: PATCH api/customTopics/updatecustomtopic/:id
//desc:  updating a custom topic by topic id.
router.patch('/updatecustomtopic/:id', patchvalidation , updateCustomTopic);

export default router;