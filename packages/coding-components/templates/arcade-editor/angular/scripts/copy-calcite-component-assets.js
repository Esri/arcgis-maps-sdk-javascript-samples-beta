var ncp = require("ncp").ncp;
var resolvePkg = require("resolve-pkg");

ncp.limit = 16;

ncp(resolvePkg("@esri/calcite-components/dist/calcite/assets/"), "./src/assets/", function (err) {
  if (err) {
    return console.error(err);
  }
  console.log("Calcite components assets copied!");
});
