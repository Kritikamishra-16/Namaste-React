import { useParams } from "react-router-dom"; 
import { useEffect, useState } from "react";
import {IMG_CDN_URL} from "../config"
import Shimmer from "./Shimmer"

const RestaurantMenu=()=>{
    //destructuring the object
    const {id}= useParams();
    const [restaurant, setRestaurant]= useState(null); //initial render it is an empty object


    useEffect(()=>{
        getRestaurantInfo();
    },[]);

    async function getRestaurantInfo(){
        const data= await fetch("https://www.swiggy.com/dapi/menu/v4/full?lat=28.4210861&lng=77.0753608&menuId=" + id);
        const json= await data.json();
        //console.log(json);
        setRestaurant(json.data);
    }

    return (!restaurant)? <Shimmer/> :(
        <div className="menu">
            <div>
                <h1>Restaurant id: {id}</h1>
                <h2>{restaurant.name}</h2>
                <img src={IMG_CDN_URL + restaurant.cloudinaryImageId}/>
                <h3>{restaurant.area}</h3>
                <h3>{restaurant.city}</h3>
                <h3>{restaurant.avgRating} stars</h3>
                <h3>{restaurant.costForTwoMsg}</h3>
            </div>
            <div>
                {/**Converting whole object into array of values */}
                {console.log(Object.values(restaurant.menu.items))}
                <h1>Menu</h1>
                <ul>
                    {Object.values(restaurant?.menu?.items).map((item)=>
                    <li key={item.id}>{item.name}</li>)} 
                </ul>
            </div>
        </div>
    )
};

export default RestaurantMenu;