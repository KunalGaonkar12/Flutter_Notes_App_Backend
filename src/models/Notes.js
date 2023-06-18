//Steps
//1.Define Scheme-> Note: id,uerid,title,content,dateadded
//2.Create Model->  <model name> <schema> Note

const mongoose= require("mongoose");

const noresSchema=mongoose.Schema({
id:{
    type:String,
    unique:true,
    required:true
},userId:{
    type:String,
    required:true 
},title:{
    type:String,
    required:true 
},content:{
    type:String,
     
},dateAdded:{
    type:Date,
   default:Date.now
     
}
});


//Export the model to be use anywhere
module.exports=mongoose.model("Note",noresSchema);