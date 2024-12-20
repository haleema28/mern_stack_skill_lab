const express = require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const app = express();
const port =3005;
const RestaurantModel=require('./restuarant');
const Restaurant = require('./restuarant');
app.use(express.json());//parsing data json format to norm
app.use(cors());
mongoose.connect('mongodb+srv://sadiyahaleema2004:haleema@cluster0.vkt8l.mongodb.net/');

//insert data in db
app.post('/insert',async (req,res)=>{
    const name =req.body.name;
    const type=req.body.type;
    const location=req.body.location;
    const rating=req.body.rating;
    const top_food=req.body.top_food;
    
    const restuarant=new RestaurantModel({name:name,type:type,location:location,rating:rating,top_food:top_food})
    try {
        await restuarant.save()
        res.send("inserted data");
    } catch (err) {
        console.log(err);
    }
})
//get data from db
app.get('/read',async (req,res)=>{
    try {
        const result=await RestaurantModel.find({});
        res.send(result);
    } catch (err) {
        console.log(err);
    }
})

app.put('/update', async (req, res) => {
    const { _id, name, type, location, rating, top_food } = req.body;

    if (!_id) {
        return res.status(400).send('Restaurant ID is required');
    }

    try {
        const updatedRestaurant = await RestaurantModel.findByIdAndUpdate(
            _id,  // Using _id to find the document
            { name, type, location, rating, top_food },
            { new: true } // Return the updated document
        );

        if (!updatedRestaurant) {
            return res.status(404).send('Restaurant not found');
        }

        res.send('Updated successfully');
    } catch (err) {
        console.error('Error updating restaurant:', err);
        res.status(500).send('Error updating restaurant');
    }
});


//delete data fr db
app.delete('/delete/:id',async (req,res) => {
    try {
        const id=req.params.id;
        await RestaurantModel.findByIdAndDelete(id);
        res.send('deleted')
    } catch (err) {
        console.log(err);
    }
});
app.listen (port, ()=>{
    console.log(`Server running at http://localhost:${port}`);
})