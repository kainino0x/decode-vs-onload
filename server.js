const express = require("express");
const app = express();

// serving "." serves up the server code too. this is fine.
app.use(express.static(".", {
  setHeaders: function(res, path) {
    res.set("Cross-Origin-Opener-Policy", "same-origin");
    res.set("Cross-Origin-Embedder-Policy", "require-corp");
  }
}));

const listener = app.listen(8085, function () {
  console.log("listening on port", listener.address().port);
});
