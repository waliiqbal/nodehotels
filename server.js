/*const { userInfo } = require('os');

var fs = (require('fs'));
var os = (require('os'));

var user = os.userInfo();
console.log(user);
console.log(user.username);

fs.appendFile("greeting.txt", "hi"+ user.username + "!\n", () => console.log("file is created") 
const notes = require("./notes");
console.log("server file is loaded");

var age = notes.age;
var _ = require("lodash");
var result = notes.addnumber(age,age+2);
console.log(age);
console.log(result);

var data = ["age", "apple", "age", "apple", 1,1,2,2,3,4,5];
var filter = _.uniq(data);
console.log(filter);*/

const jsonString = '{"name": "John", "age": 30, "city": "New York"}';

try {
  const obj = JSON.parse(jsonString);
  console.log(obj);
  // Output: { name: 'John', age: 30, city: 'New York' }
} catch (error) {
  console.error("Error parsing JSON:", error);
}

const obj = {
    name: "John",
    age: 30,
    city: "New York"
  };
  
  const jsonstring = JSON.stringify(obj);
  console.log(jsonstring);
  // Output: {"name":"John","age":30,"city":"New York"}
  




