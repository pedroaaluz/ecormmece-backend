import AWS from "aws-sdk";

const dynamoDb = new AWS.DynamoDB.DocumentClient();

export const main = async (event) => {

  const params = {
    TableName: process.env.productsTabledynamodb,
  };

  try {
    const list = await dynamoDb.scan(params).promise();
    console.log(list);
    return {
      statusCode: 200,
      body: JSON.stringify({
        product: list.Items,
      }),headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
    };

  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({error: error.message}),
    };
  }
};
