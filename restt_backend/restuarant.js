const mongoose=require('mongoose');
const RestaurantSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        required:true
    },
    top_food:{
        type:String,
        required:true
    }
})
const Restaurant=mongoose.model("Restaurant",RestaurantSchema);
module.exports=Restaurant;