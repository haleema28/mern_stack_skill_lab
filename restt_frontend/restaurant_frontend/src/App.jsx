import React, {Routes,Route, useState, useEffect } from 'react';
import axios from 'axios';


import './App.css'


function App() {
    const [restaurants, setRestaurants] = useState([]);
    const [newRestaurant, setNewRestaurant] = useState({ name: '', type: '', location: '', rating: '', top_food: '' });
    const [editRestaurant, setEditRestaurant] = useState({ _id: '', name: '', type: '', location: '', rating: '', top_food: '' });

    // Fetch restaurants from the database
    const fetchRestaurants = async () => {
        try {
            const response = await axios.get('http://localhost:3005/read');
            setRestaurants(response.data);
        } catch (err) {
            console.error('Error fetching restaurants:', err);
        }
    };

    useEffect(() => {
        fetchRestaurants();
    }, []);

    // Insert new restaurant
    const handleInsert = async () => {
        try {
            await axios.post('http://localhost:3005/insert', newRestaurant);
            fetchRestaurants();
            setNewRestaurant({ name: '', type: '', location: '', rating: '', top_food: '' });
        } catch (err) {
            console.error('Error inserting restaurant:', err);
        }
    };

    
    const startEdit = (restaurant) => {
      setEditRestaurant(restaurant);  
  };
  

    // Update restaurant
    const handleUpdate = async () => {
      try {
          if (!editRestaurant._id) {
              console.error('Restaurant ID is missing');
              return;
          }
          
          // Sending the _id along with other fields
          await axios.put('http://localhost:3005/update', editRestaurant); 
          fetchRestaurants(); // Refresh the restaurant list
          setEditRestaurant({ _id: '', name: '', type: '', location: '', rating: '', top_food: '' });  // Reset form
      } catch (err) {
          console.error('Error updating restaurant:', err);
      }
  };
  

    // Delete restaurant
    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:3005/delete/${id}`);
            fetchRestaurants();
        } catch (err) {
            console.error('Error deleting restaurant:', err);
        }
    };

    return (
      <>
        <div className="App">
         <nav class="navbar navbar-expand-lg bg-body-tertiary">
           <div class="container-fluid">
    
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                 <li class="nav-item">
                     <a class="nav-link active" aria-current="page" href="#">Home</a></li>
              </ul>
            <div class="head">
            <a class="navbar-brand" href="#">Restaurant Management</a>
            </div>
             <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                <button class="btn btn-outline-success" type="submit">Search</button>
             </form>
            </div>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
             <li class="nav-item">
             <a class="nav-link active" aria-current="page" href="#">Log Out</a></li>
              </ul>
          </div>
         </nav>

            <div className="dd">
            <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Add New Restuarant
  </button>
  <ul class="dropdown-menu">
    <li><input type="text" placeholder="Name" value={newRestaurant.name} onChange={(e) => setNewRestaurant({ ...newRestaurant, name: e.target.value })} /></li>
    <li><input type="text" placeholder="Type" value={newRestaurant.type} onChange={(e) => setNewRestaurant({ ...newRestaurant, type: e.target.value })} /></li>
    <li><input type="text" placeholder="Location" value={newRestaurant.location} onChange={(e) => setNewRestaurant({ ...newRestaurant, location: e.target.value })} /></li>
    <li><input type="number" placeholder="Rating" value={newRestaurant.rating} onChange={(e) => setNewRestaurant({ ...newRestaurant, rating: e.target.value })} /></li>
    <li><input type="text" placeholder="Top Food" value={newRestaurant.top_food} onChange={(e) => setNewRestaurant({ ...newRestaurant, top_food: e.target.value })} /></li>
    <li><button onClick={handleInsert}>Add Restaurant</button></li>
  </ul>
</div>
            
            <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Edit Restuarant
  </button>
  <ul class="dropdown-menu">
    <li><input type="text" placeholder="Name" value={editRestaurant.name} onChange={(e) => setEditRestaurant({ ...editRestaurant, name: e.target.value })} /></li>
    <li><input type="text" placeholder="Type" value={editRestaurant.type} onChange={(e) => setEditRestaurant({ ...editRestaurant, type: e.target.value })} /></li>
    <li><input type="text" placeholder="Location" value={editRestaurant.location} onChange={(e) => setEditRestaurant({ ...editRestaurant, location: e.target.value })} /></li>
    <li><input type="number" placeholder="Rating" value={editRestaurant.rating} onChange={(e) => setEditRestaurant({ ...editRestaurant, rating: e.target.value })} /></li>
    <li><input type="text" placeholder="Top Food" value={editRestaurant.top_food} onChange={(e) => setEditRestaurant({ ...editRestaurant, top_food: e.target.value })} /></li>
    <li><button onClick={handleUpdate}>Update Restaurant</button></li>
  </ul>
</div>
</div>
           

<h2>Restaurant List</h2>
<div className="restaurant-cards">
    {restaurants.map((restaurant) => (
        <div className="card" key={restaurant._id}>
            <h3>{restaurant.name}</h3>
            <p><strong>Type:</strong> {restaurant.type}</p>
            <p><strong>Location:</strong> {restaurant.location}</p>
            <p><strong>Rating:</strong> {restaurant.rating}</p>
            <p><strong>Top Food:</strong> {restaurant.top_food}</p>
            <div className="card-actions">
                <button onClick={() => startEdit(restaurant)}>Edit</button>
                <button onClick={() => handleDelete(restaurant._id)}>Delete</button>
            </div>
        </div>
    ))}
</div>


        </div>
        </>
    );
}

export default App;
