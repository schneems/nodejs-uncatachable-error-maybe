const jsforce =  require("jsforce");


conn = new jsforce.Connection({
  accessToken: "",
  instanceUrl: "http://thisdoesnotexistalsdkfjalsdkfjasdlkfjasdlkfjalsdkfja.com",
  version: "51.0",
  callOptions: {
    client: `sf-fx-runtime-nodejs-sdk-impl-v1:1`
  }
});

const response = conn.query("SELECT foo from bar");
console.log(response);

response.then(
undefined,
function foo(e) {
  console.log("======================== lol")
  console.log(e)
})

