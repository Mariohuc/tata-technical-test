const docClient = require("../config/dynamoDb");
const STUDENTS_TABLE = process.env.STUDENTS_TABLE;
const uuid = require("uuid");


class Student {
  constructor() {}

  static async getAll() {
    const params = {
      TableName: STUDENTS_TABLE,
    };
    const scanResults = {};
    scanResults["count"] = 0;
    scanResults["results"] = [];
    let items;

    do {
      items = await docClient.scan(params).promise(); //scan read all items
      items.Items.forEach((item) => scanResults["results"].push(item));
      params.ExclusiveStartKey = items.LastEvaluatedKey;
    } while (typeof items.LastEvaluatedKey !== "undefined");

    scanResults["count"] = scanResults["results"].length;
    return scanResults;
  }

  static async create(student) {
    const { fullname, email } = student;
    if (typeof fullname !== "string" || typeof email !== "string") {
      console.error("Validation Failed");
      throw new Error(
        "Couldn't store new student because of validation errors."
      );
    }
    const timestamp = new Date().getTime();
    const new_student = {
      id: uuid.v1(),
      fullname: fullname,
      email: email,
      submittedAt: timestamp,
    };
    const params = {
      TableName: STUDENTS_TABLE,
      Item: new_student,
    };

    await docClient.put(params).promise();
    return new_student;
  }
}

module.exports = Student;
