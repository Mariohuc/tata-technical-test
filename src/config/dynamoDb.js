const AWS = require("aws-sdk");

const IS_OFFLINE = process.env.IS_OFFLINE;
AWS.config.setPromisesDependency(require('bluebird'));

const docClient = () => {
  if (IS_OFFLINE === "true") {
    return new AWS.DynamoDB.DocumentClient({
      region: "localhost",
      endpoint: "http://localhost:8000",
    });
    //console.log(dynamoDb);
  } else {
    return new AWS.DynamoDB.DocumentClient();
  }
};

module.exports = docClient()
