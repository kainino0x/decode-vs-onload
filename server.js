const express = require("express");
const app = express();

app.use(express.static("public", {
  setHeaders: function(res, path) {
    res.set("Cross-Origin-Opener-Policy", "same-origin");
    res.set("Cross-Origin-Embedder-Policy", "require-corp");
  }
}));

const listener = app.listen(8085, function () {
  console.log("listening on port", listener.address().port);
});
