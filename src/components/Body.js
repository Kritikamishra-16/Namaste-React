import { restaurantList } from "../config.js";
import RestaurantCard  from "./RestaurantCard";
import { useState, useEffect } from "react";

function filterData(searchText,restaurantList)
{
  const filterData= restaurantList.filter((restaurant)=> restaurant.data.name.includes(searchText));
  return filterData;
}

const Body=()=>{
    const [searchText, setSearchText] =useState();
    const [clicked, setClicked] =useState("true");
    const [restaurants, setRestaurants] =useState(restaurantList);

    return (
      <> 
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Search"
            value={searchText} 
            onChange={(e)=>{
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="btn"
            onClick={(e)=>{
              //filter data based on searchText and original restaurantList not filtered list
              const data=filterData(searchText,restaurantList);
              //pass the data 
              setRestaurants(data);

            }}
          >Search</button>
        </div>

        <div className="toggle">
          <h1>{clicked}</h1>
          <button 
            className="btn2"
            onClick={(e)=>{
              if(clicked =="true")
                setClicked("false");
              else
                setClicked("true");  
            }}
          >Click me</button>
        </div>

        <div className='restaurant-list'>
           {
             restaurants.map((restaurant)=>{
                return <RestaurantCard {...restaurant.data} key={restaurant.data.id}/>;
             })
           }
        </div>
      </>  
    )
};

export default Body;