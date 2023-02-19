import RestaurantCard  from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
 
function filterData(searchText,restaurants)
{
  const filterData= restaurants.filter((restaurant)=> restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase()));
  return filterData;
}



const Body=()=>{ 
    const [searchText, setSearchText] =useState();
    const [filteredRestaurants, setFilteredRestaurants] =useState([]);
    const [allRestaurants, setAllRestaurants] =useState([]);
   
    useEffect(()=>{
      //API call here ->otherwise after every re-render api calls are made which is very bad practice
      getRestaurants();

    }, []); //callback function , dependency array


    //our browswer does not allow us to make api call from our loacl host
    //CORS->we need to install cors pluginit lets you bypass the CORS error
    //Loading a website-> Shimmer UI 

    async function getRestaurants(){
      //return a readable stream 
      const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4183505&lng=77.0758733&page_type=DESKTOP_WEB_LISTING");
      //this readable stream needs to be get converted into json object so that we canread it
      const json= await data.json();
      
      //optional chaining (?.)
      setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
      //for the first time render (without first search button click) FilteredRestaurants should not be empty otherwise .map function will break 
      setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    }

    //Not render component(Early Return)
    if(!allRestaurants)
    return null; 

    //Conditional Rendering
    //if restaurant is empty-> load shimmer UI
    //if restaurant has data-> load actual data UI

    return (allRestaurants?.length=== 0)? <Shimmer/> :(
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
              const data=filterData(searchText,allRestaurants);
              //pass the data 
              setFilteredRestaurants(data);

            }}
          >Search</button>
        </div>

        <div className='restaurant-list'>
           {
            //add logic for NO RESTAURANT FOUND HERE
             filteredRestaurants?.length==0 ?
             <h2>No items matches your search</h2> :
             filteredRestaurants.map((restaurant)=>{
                return <Link to={"/restaurant/"+restaurant.data.id}  key={restaurant.data.id}><RestaurantCard {...restaurant.data}/></Link>;
             })
           }
        </div>
      </>  
    )
};

export default Body;