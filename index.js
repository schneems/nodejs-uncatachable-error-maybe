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
response.then(() => console.log("yay")).catch((err) => console.log("an error occurred that we caught:", err));
