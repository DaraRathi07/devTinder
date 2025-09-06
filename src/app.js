const express = require("express");

const app = express();

app.use("/hello", (req,res) => {
    res.send("namaste node")
} );

app.use("/test",(req , res) => {
    res.send("Hello fron the server")
});

app.listen(3000,() => {
    console.log("server is listening at port 3000")
});