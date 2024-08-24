import mongoose from "mongoose";

const newsschema=new mongoose.Schema({
    Title:{
        type:String,
        required:[true,"Title is required"],
        minlength:[5,"minimum 5 characters is required"],
        maxlength:[40,"maximum length of title is 40 characters"]
    },
    ImageContext:{
        type:String,
        required:true
    },
    smalldescription:{
        type:String,
        required:[true,"Title is required"],
        minlength:[10,"minimum 5 characters is required"],
        maxlength:[200,"maximum length of title is 40 characters"]
    },
    largerdescription:{
        type:String,
        required:[true,"Title is required"],
        minlength:[100,"minimum 5 characters is required"],
        maxlength:[700,"maximum length of title is 40 characters"]
    },
    Story:{
        type:String,
        required:[true,"Whole story is required"],
        minlength:[400,"minimum length should be 400 character"]
    }

},{
    timestamps:true
});

const News=mongoose.model('News',newsschema);


export default News;