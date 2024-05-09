const mongoose=require("mongoose");

mongoose.connect("mongodb+srv://admin:admin123@cluster0.x9wltcd.mongodb.net/users?retryWrites=true&w=majority&appName=Cluster0rcrudapp").then(()=>{
    console.log("connetion succesfulll");
}).catch((e)=>{
    console.log(e);
})


const Schema= new mongoose.Schema({
    name:String,
    email:String,
    password:String
})

const Usermodel = mongoose.model("User",Schema);

module.exports =Usermodel;


