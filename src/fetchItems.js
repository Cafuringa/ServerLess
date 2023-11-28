"use strict";
const AWS = require("aws-sdk");

const fetchItems = async (event) => {
  //module.exports.fetchItems = async (event) => {

    const dynamodb = new AWS.DynamoDB.DocumentClient();

    let items;

    try {
        const results = await dynamodb.scan({
            TableName: "api-project-dev-TableApi-U61S2YMMDKZX"
        }).promise();

        items = results.Items;

    } catch (error) {
        console.log(error)
    }

    return {
        statusCode: 200,
        body: JSON.stringify(items),
    };
};

module.exports = {
    handler: fetchItems,
};