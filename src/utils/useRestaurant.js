//responsibility of this hook is to implement the logic that it takes "resId" from usePrams() hook and return the restaurant details fetched from an API call
import { FETCH_MENU_URL } from "../config";
import { useState,useEffect } from "react";

const useRestaurant=(resId)=>{
    const [restaurant, setRestaurant] = useState(null);
    
    //get data from API
    useEffect(()=>{
        getRestaurantInfo();
    },[])

    //make API call to get data
    async function getRestaurantInfo(){
        const data=await fetch(FETCH_MENU_URL+resId+"&submitAction=ENTER");
        const json=await data.json();
        console.log(json);
        setRestaurant(json.data.cards);
    }

    //return restaurant data
    return restaurant;
};

export default useRestaurant;  