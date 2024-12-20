
const { Timestamp } = require('console');
const mongoose = require('mongoose');
const mongo_URL ="mongodb+srv://sadiyahaleema2004:haleema@cluster0.65dl6.mongodb.net/"
const connectToMongo =async() =>{
    mongoose.Promise =global.Promise;
    try{
        await mongoose.connect(mongo_URL);
        console.log("connected to database")
    }catch(error){
        console.error("Failed to connect");
        process.exit();
    }
}
// function connect (uri:String,options?:mongoose.ConnectOptions):promises(mangoose:Mongoose)
    const collection_name = 'restaurant';
    const collection_fields ={
        id:Number,
        name: String,
        type:String,
        location: String,
        rating:Number,
        top_food:String
    };
    const collection_config ={
        timeStamp:false
    };
     const schema = mongoose.Schema(collection_fields,collection_config);
     const RestaurantModel=mongoose.model(collection_name,schema);

     

const createRestaurant =async()=>{
    await connectToMongo();

    try{
        const RestaurantModel = new RestaurantModel({
            _id: new mongoose.Types.ObjectId(),
            name: 'Arun',
            location: 'Hyderabad',
            technology: 'MERN',
            phone_number: '8197538161',
        });

        const createdDocument = await RestaurantModel.save();
        console.log('Trainer created successfully',createdDocument);
    }catch(err){
        console.log(err);
    }finally{
        await mongoose.disconnect();
        console.log('Connection to Mongodb is closed');
    }
}
createTrainer();
