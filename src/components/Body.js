import RestaurantCard  from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";


const Body=()=>{ 
    const [searchText, setSearchText] =useState();
    const [filteredRestaurants, setFilteredRestaurants] =useState([]);
    const [allRestaurants, setAllRestaurants] =useState([]);
    
    
    useEffect(()=>{
      //API call here ->otherwise after every re-render api calls are made which is very bad practice
      getRestaurants();

    }, []); //callback function , dependency array


    //our browswer does not allow us  to make api call from our loacl host
    //CORS->we need to install cors pluginit lets you bypass the CORS error
    //Loading a website-> Shimmer UI 
    async function getRestaurants(){
      //return a readable stream 
      const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.4529334&lng=81.8348882&page_type=DESKTOP_WEB_LISTING");
      //this readable stream needs to be get converted into json object so that we canread it
      const json= await data.json();
      
      //optional chaining (?.)
      setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
      //for the first time render (without first search button click) FilteredRestaurants should not be empty otherwise .map function will break 
      setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    }

    //custom hook that returns whrther we are online or offline
    const isonline=useOnline(); 
    if(!isonline){
      return <h1>🔴 Offline, Please check your internet connection</h1>
    } 

    //Not render component(Early Return)
    if(!allRestaurants)
    return null;

    return (allRestaurants?.length=== 0)? <Shimmer/> :(
      <> 
        <div className="search-container p-5 bg-pink-50 my-2">
          <input
            type="text"
            className="search-input focus:bg-gray-300 p-2 m-2"
            placeholder="Search"
            value={searchText} 
            onChange={(e)=>{
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="p-3 m-2 bg-purple-700 hover:bg-gray-400 text-white rounded-lg "
            onClick={(e)=>{
              //filter data based on searchText and original restaurantList not filtered list
              const data=filterData(searchText,allRestaurants);
              //pass the data 
              setFilteredRestaurants(data);

            }}
          >Search</button>
        </div>

        <div className='flex flex-wrap'>
           {
            //add logic for NO RESTAURANT FOUND HERE
             filteredRestaurants?.length==0 ?
             <h2>No items matches your search</h2> :

             filteredRestaurants.map((restaurant)=>{
                return( 
                <Link to={"/restaurant/"+restaurant.data.id} 
                 key={restaurant.data.id}>
                  <RestaurantCard {...restaurant.data}/></Link>
                );
             })
           }
        </div>
      </>  
    )
};

export default Body;