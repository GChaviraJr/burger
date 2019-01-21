const express = require('express')

const app = express()
const PORT = process.env.PORT || 3000





app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("App is listening on" + PORT);
  });