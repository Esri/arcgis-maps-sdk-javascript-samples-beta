var ncp = require("ncp").ncp;
var resolvePkg = require("resolve-pkg");

ncp.limit = 16;

ncp(resolvePkg("@arcgis/coding-components/dist/arcgis-coding-components/assets/"), "./src/assets/", function (err) {
  if (err) {
    return console.error(err);
  }
  console.log("Coding components assets copied!");
});
