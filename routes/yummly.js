// const express = require("express")
// const bodyParser = require ('body-parser');
// const cors = require("cors");
// const router  = express.Router()
// const yummlyController =require("../controllers/yummlyControl")
// router.use (bodyParser.urlencoded ({extended: true}));
// router.use (bodyParser.json ());
// router.use (express.json ());
// router.use(cors({
//     origin: ["http://localhost:3000"],
//     methods: ["GET", "POST", "UPDATE", "DELETE"],
//     credentials: true
// }))

// router
// .get("https://yummly2.p.rapidapi.com/feeds/auto-complete", yummlyController.autoComplete)

const express = require('express');
const router = express.Router();
const yummlyController = require('../controllers/yummlyControl');

// router
// .get('/auto-complete', yummlyController.autoComplete);
router.
get('/auto-complete', yummlyController.autoComplete);

router
.get('/recipes/search', yummlyController.searchRecipes);

router
.get("/feeds/list", yummlyController.feedsList)

router
.get("/list-similarities", yummlyController.feedsSimilarities)

router
.get("/tags/list", yummlyController.tagList)

router
.get("/category/list", yummlyController.categoryList)

router
.get("/review/list", yummlyController.reviewList)
module.exports = router;
