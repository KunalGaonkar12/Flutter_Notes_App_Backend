
//Initialization 
//Import/Initialize express and store in variable
const express=require("express");

//Create new app using express function
const app= express();

//Import/Initialize mongoose and store in variable
const mongoose=require("mongoose");

//Import body-parser
const bodyParser= require("body-parser");
//To use body-parser in entire express app
app.use(bodyParser.urlencoded({extended: false})); //true-> nexted objects are (Correct). //false-> nexted objects are (Not Correct)
app.use(bodyParser.json());



//import not model
const Note=require("./models/Notes")


//Connect to the database (Provide the connect string->go to Mongodb ,
//click on connect of ur closter
//->select to connect to ur application
//->Copy and past the string below
//->change password to urs and give the db name)


const mongoDbPAth="mongodb+srv://kunal123:kunal123@cluster0.ftilyxy.mongodb.net/notesdb";

mongoose.connect(mongoDbPAth).then(function(){


// Set Home route 
app.get("/",function(req,res){

    const response= {messgae:"Api Working!"}
    res.json(response);
});


const noteRouter= require("./routes/Notes");

app.use("/notes",noteRouter);
    
console.log("Database Connect Succesfully...");

});




//To run app on the current device environment
const PORT=process.env.PORT || 5000

//To run the app at port 5000
app.listen(PORT,function(){
    console.log("The server is running on Port: "+PORT)
});