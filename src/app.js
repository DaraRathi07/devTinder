const express = require("express");

const app = express();

const { adminAuth, userAuth } = require("./middlewares/auth");

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
// remember ? , * , + , () 
// app.get("/user/:userId/:password", (req,res) => {
//     console.log(req.params)
//     res.send({firstname: "Dara", lastname: "Rathi"})
// });

// app.post("/user", (req,res) => {
//     res.send("Data sucessfully saved to DB")
// });

// by using regex
// app.get(/.*fly$/ , (req,res) => {
//     res.send("Data sucessfully saved to DB")
// });





// app.use("/user", (req,res, next) => {
//     console.log("route handler 1")  /// this is middleware


//     next();

//         // res.send("route 1");
// } ,
// (req,res, next) => {
//     // res.send("route 2");
//     next();
//     console.log("route handler 2") // this is middleware
// },
// (req,res) => {
//     res.send("route 3");
//     console.log("route handler 3") // actual route handler
// });



// handle all auth middleware for all Get ,Post , ...requests
app.use("/admin", adminAuth);



app.use("/user" ,userAuth);

app.get("/user", (req,res) => {
    res.send("user data sent")
});

app.get("/user/login", (req,res) => {
    res.send("login successfully")
});




app.get("/admin/getAllData", (req, res) => {

    // logic of checking the request is authorized or unauthorized
    // const token = "xyez";
    // const isAdminAuthorized = token == "xyz";
    // if(isAdminAuthorized){
    // res.send("All data sent");
    // } else {
    //     res.status(401).send("unauthorized request");
    // }


    res.send("all data sent")

});

app.get("/admin/deleteAllData", (req, res) => {
    res.send("All data Delteted")
});


// this will matcht the all the http methods API calls to /test
// app.use("/test",(req , res) => {
//     res.send("Hello fron the server")
// });






app.listen(3000,() => {
    console.log("server is listening at port 3000")
});