import mongoose from "mongoose";

export function connection(){
    mongoose.connect('mongodb+srv://jasirmon133:GgTTcfrLhnoIgHCW@cluster0.mf7zy.mongodb.net/')
    .then((con)=>{
        console.log("connection Success");
        
    }).catch((err)=>{
        console.log(err.message)
    })
}