const axios = require('axios');
const { response, query } = require('express');
require('dotenv').config()


exports.autoComplete = async (req, res) => {
    const { q } =  req.query
     // Check if there is no query value for 'q'
    if (!q || q.length === 0) {
        res.status(400).json({ message: 'A query value is required' });
        return;
    }
  try {
    const options = {
      method: 'GET',
      url: 'https://yummly2.p.rapidapi.com/feeds/auto-complete',
      params: { q },
      headers: {
        'X-RapidAPI-Key': process.env.X_RAPIDAPI_KEY,
        'X-RapidAPI-Host': process.env.X_RAPIDAPI_HOST
      }
    };

    const response = await axios.request(options);
    // console.log(response) 
    // console.log("Value of params is " +response.params)
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.json(error)
    res.status(500).json({ error: 'An error occurred while retrieving data' });
  }
};

exports.searchRecipes = async (req, res) => {
  
    try {
      const { maxResult, start } = req.query;

        // Check if either 'maxResult' or 'start' parameters are missing
        if (!maxResult || !start) {
            res.status(400).json({ message: 'Both maxResult and start parameters are required' });
            return;
        }
  
      const options = {
        method: 'GET',
        url: 'https://yummly2.p.rapidapi.com/feeds/search',
        params: { 
          maxResult,
          start,
        },
        headers: {
          'X-RapidAPI-Key': process.env.X_RAPIDAPI_KEY,
          'X-RapidAPI-Host': process.env.X_RAPIDAPI_HOST,
        //   useQueryString: true
        }
      };
  
      const response = await axios.request(options);
      console.log(response.data)
      res.json(response.data);
    } 
    catch (error) {
      console.error(error);
      console.log("there's an error in the api call")
      res.send(error)
    }
};

exports.feedsList = async(req, res) => {
    try{
        const { limit, start }= req.query

         // Check if either 'limit' or 'start' parameters are missing
            if (!limit || !start) {
                res.status(400).json({ message: 'Both limit and start parameters are required' });
                return;
            }

        const options = {
            method: "GET",
            url: "https://yummly2.p.rapidapi.com/feeds/list",
            params: {
                limit,
                start,
            },
            headers: {
                'X-RapidAPI-Key': process.env.X_RAPIDAPI_KEY,
                'X-RapidAPI-Host': process.env.X_RAPIDAPI_HOST,
              }
        }
        const response = await axios.request(options)
        // console.log(response.data)
        res.send(response.data)
    } catch(error) {
        console.log(error)
        res.send(error)
    }
}

exports.feedsSimilarities = async(req, res) => {
    try {
        const { limit, start, id, apiFeedType, authorId } = req.query

        // Check if either 'limit' or 'start' parameters are missing
        if (!limit || !start || !id || !apiFeedType || !authorId) {
            res.status(400).json({ message: 'All parameters are required' });
            console.log({ message: 'All parameters are required' })
            return;
          }
        const options = {
            method: 'GET',
            url: 'https://yummly2.p.rapidapi.com/feeds/list-similarities',
            params: {
              limit,
              start,
              id,
              apiFeedType,
              authorId
            },
            headers: {
              'X-RapidAPI-Key': process.env.X_RAPIDAPI_KEY,
              'X-RapidAPI-Host': process.env.X_RAPIDAPI_HOST
            }
          };
          const response = await axios.request(options)
          console.log(response.data)
          res.send(response.data)
    } 
    catch (error) {
       console.log(error)
       res.send(error) 
    }
}

exports.tagList = async(req, res) => {
    try {
        const options = {
            method: 'GET',
            url: 'https://yummly2.p.rapidapi.com/tags/list',
            headers: {
              'X-RapidAPI-Key': process.env.X_RAPIDAPI_KEY,
              'X-RapidAPI-Host': process.env.X_RAPIDAPI_HOST
            }
          };
          const response = await axios.request(options)
          const responseData = response.data; 
          console.log(responseData)
          res.send(responseData)
    } catch (error) {
        console.log(error)
        res.send(error)
    }
}

exports.categoryList = async (req, res) => {
    try {
        const options = {
            method: 'GET',
            url: 'https://yummly2.p.rapidapi.com/categories/list',
            headers: {
              'X-RapidAPI-Key': process.env.X_RAPIDAPI_KEY,
              'X-RapidAPI-Host': process.env.X_RAPIDAPI_HOST
            }
          };
          const response = await axios.request(options)
          const responseData = response.data
          console.log(responseData);
          res.send(responseData)
    } 
    catch (error) {
        console.log(error)
        res.send(error)
    }
}

exports.reviewList = async(req, res) => {
    try {
        const { offset, globalId, limit } = req.query

        // Check if either 'limit' or 'start' parameters are missing
        if (!limit || !offset || !globalId) {
            res.status(400).json({ message: 'All parameters are required' });
            console.log({ message: 'All parameters are required' })
            return;
          }
        const options = {
            method: 'GET',
            url: 'https://yummly2.p.rapidapi.com/reviews/list',
            params: { offset, globalId, limit },
            headers: {
              'X-RapidAPI-Key': process.env.X_RAPIDAPI_KEY,
              'X-RapidAPI-Host': process.env.X_RAPIDAPI_HOST
            }
          };
          const response = await axios.request(options)
          const responseData = response.data
          console.log(responseData);
          res.send(responseData)
    } 
    catch (error) {
        console.log(error)
        res.send(error)
    }
}