const express= require("express");
const router = express.Router();

const Note=require("./../models/Notes")


// Set note List route 
router.post("/list", async function(req,res){

    //To find all data of type Note in the database
var note= await Note.find({ userId:req.body.userId });

    res.json(note);
}) ;



router.post("/add", async function(req,res){
    // res.json(req.body);
    await Note.deleteOne({
        id:req.body.id
    });

    //Create an node object with data
 const newNote= Note({
    id:req.body.id,
    userId:req.body.userId,
    title:req.body.title,
    content:req.body.content,
});

//Save the object
await newNote.save();
const response = { message: "New note created from id: " + req.body.userId };
 res.json(response);

}) ;


router.post("/delete",async function(req,res){

    await Note.deleteOne({
        id:req.body.id
    });
const response = { message: "Note Deleted  id: " + req.body.id };
res.json(response);

});

module.exports = router;