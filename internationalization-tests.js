// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by internationalization.js.
import { name as packageName } from "meteor/matguig:internationalization";

// Write your tests here!
// Here is an example.
Tinytest.add('internationalization - example', function (test) {
  test.equal(packageName, "internationalization");
});
