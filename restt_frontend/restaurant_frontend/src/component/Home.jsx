import React from "react";

const Home = ({
    newRestaurant,
    setNewRestaurant,
    handleInsert,
    editRestaurant,
    setEditRestaurant,
    handleUpdate,
    restaurants,
    startEdit,
    handleDelete,
}) => {
    return (
        <div className="App">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">
                                    Home
                                </a>
                            </li>
                        </ul>
                        <div className="head">
                            <a className="navbar-brand" href="#">
                                Restaurant Management
                            </a>
                        </div>
                        <form className="d-flex" role="search">
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            />
                            <button className="btn btn-outline-success" type="submit">
                                Search
                            </button>
                        </form>
                    </div>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">
                                Log Out
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>

            <div className="dd">
                <div className="dropdown">
                    <button
                        className="btn btn-secondary dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        Add New Restaurant
                    </button>
                    <ul className="dropdown-menu">
                        <li>
                            <input
                                type="text"
                                placeholder="Name"
                                value={newRestaurant.name}
                                onChange={(e) =>
                                    setNewRestaurant({ ...newRestaurant, name: e.target.value })
                                }
                            />
                        </li>
                        <li>
                            <input
                                type="text"
                                placeholder="Type"
                                value={newRestaurant.type}
                                onChange={(e) =>
                                    setNewRestaurant({ ...newRestaurant, type: e.target.value })
                                }
                            />
                        </li>
                        <li>
                            <input
                                type="text"
                                placeholder="Location"
                                value={newRestaurant.location}
                                onChange={(e) =>
                                    setNewRestaurant({ ...newRestaurant, location: e.target.value })
                                }
                            />
                        </li>
                        <li>
                            <input
                                type="number"
                                placeholder="Rating"
                                value={newRestaurant.rating}
                                onChange={(e) =>
                                    setNewRestaurant({ ...newRestaurant, rating: e.target.value })
                                }
                            />
                        </li>
                        <li>
                            <input
                                type="text"
                                placeholder="Top Food"
                                value={newRestaurant.top_food}
                                onChange={(e) =>
                                    setNewRestaurant({ ...newRestaurant, top_food: e.target.value })
                                }
                            />
                        </li>
                        <li>
                            <button onClick={handleInsert}>Add Restaurant</button>
                        </li>
                    </ul>
                </div>

                <div className="dropdown">
                    <button
                        className="btn btn-secondary dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        Edit Restaurant
                    </button>
                    <ul className="dropdown-menu">
                        <li>
                            <input
                                type="text"
                                placeholder="Name"
                                value={editRestaurant.name}
                                onChange={(e) =>
                                    setEditRestaurant({ ...editRestaurant, name: e.target.value })
                                }
                            />
                        </li>
                        <li>
                            <input
                                type="text"
                                placeholder="Type"
                                value={editRestaurant.type}
                                onChange={(e) =>
                                    setEditRestaurant({ ...editRestaurant, type: e.target.value })
                                }
                            />
                        </li>
                        <li>
                            <input
                                type="text"
                                placeholder="Location"
                                value={editRestaurant.location}
                                onChange={(e) =>
                                    setEditRestaurant({ ...editRestaurant, location: e.target.value })
                                }
                            />
                        </li>
                        <li>
                            <input
                                type="number"
                                placeholder="Rating"
                                value={editRestaurant.rating}
                                onChange={(e) =>
                                    setEditRestaurant({ ...editRestaurant, rating: e.target.value })
                                }
                            />
                        </li>
                        <li>
                            <input
                                type="text"
                                placeholder="Top Food"
                                value={editRestaurant.top_food}
                                onChange={(e) =>
                                    setEditRestaurant({ ...editRestaurant, top_food: e.target.value })
                                }
                            />
                        </li>
                        <li>
                            <button onClick={handleUpdate}>Update Restaurant</button>
                        </li>
                    </ul>
                </div>
            </div>

            <h2>Restaurant List</h2>
            <div className="restaurant-cards">
                {restaurants.map((restaurant) => (
                    <div className="card" key={restaurant._id}>
                        <h3>{restaurant.name}</h3>
                        <p>
                            <strong>Type:</strong> {restaurant.type}
                        </p>
                        <p>
                            <strong>Location:</strong> {restaurant.location}
                        </p>
                        <p>
                            <strong>Rating:</strong> {restaurant.rating}
                        </p>
                        <p>
                            <strong>Top Food:</strong> {restaurant.top_food}
                        </p>
                        <div className="card-actions">
                            <button onClick={() => startEdit(restaurant)}>Edit</button>
                            <button onClick={() => handleDelete(restaurant._id)}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
