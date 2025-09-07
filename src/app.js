const express = require("express");

const app = express();

// app.use("/" , (req,res) => {
//     res.send("namaste Dara Singh Rathi")
// });


// app.use("/hello", (req,res) => {
//     res.send("namaste node")
// } );

// app.use("/user", (req,res) => {
//     res.send("HaHaHaHaHa")
// });




//this will only handle get calls to the /user
app.get("/user/:userId/:password", (req,res) => {
    console.log(req.params)
    res.send({firstname: "Dara", lastname: "Rathi"})
});

app.post("/user", (req,res) => {
    res.send("Data sucessfully saved to DB")
});





// this will matcht the all the http methods API calls to /test
app.use("/test",(req , res) => {
    res.send("Hello fron the server")
});






app.listen(3000,() => {
    console.log("server is listening at port 3000")
});