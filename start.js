const express = require("express");
const path = require("path");
const port = 3000;

const app = express();
app.use(express.static(path.resolve(__dirname, "public")));
app.use("/", (req, res, next) => {
    res.sendFile(path.join(__dirname, "index.html"));
})
app.listen(port);
console.log(`Listening to port ${port}...`);