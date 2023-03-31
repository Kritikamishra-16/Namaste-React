 import { useParams } from "react-router-dom"; 
import { useEffect, useState } from "react";
import {IMG_CDN_URL} from "../config"
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu=()=>{
    //destructuring the object
    const {id}= useParams();

    //custom hook that takes resId and return restaurant details by making an API call
    const restaurant=useRestaurant(id);


    const dispatch =useDispatch();
    const addFoodItem=(item)=>{
        //When we click on add button it will dispatch an action pass the payload
        dispatch(addItem(item));   //{payload: "Grapes"}
    }



    return (!restaurant)? <Shimmer/> :(
        <div className="flex">
            <div>
                <h1>Restaurant id: {id}</h1>
                <h2>{restaurant[0]?.card.card.info.name}</h2>
                <img src={IMG_CDN_URL + restaurant[0]?.card.card.info.cloudinaryImageId}/>
                <h3>{restaurant[0]?.card.card.info.city}</h3>
                <h3>{restaurant[0]?.card.card.info.avgRating} stars</h3>
                <h3>{restaurant[0]?.card.card.info.costForTwoMessage}</h3>
            </div>


            <div className="p-5">
                {console.log(restaurant[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card)}
                {/**Converting whole object into array of values */}
                {/*console.log(Object.values(restaurant[2]?.groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards))*/}
                <h1>Menu</h1>
                <ul>
                    {Object.values(restaurant[2]?.groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards).map((card)=>
                    <li key={card.card.info.id}> {card.card.info.name} -
                     
                     <button 
                     className="p-1 bg-green-100" 
                     onClick={()=> addFoodItem(card.card.info)}
                     > Add</button>
                    
                    </li>
                    )} 
                </ul>
            </div>
        </div>
    )
};

export default RestaurantMenu;