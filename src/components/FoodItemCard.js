import { IMG_CDN_URL } from '../config.js';


const FoodItem=({name,description ,imageId,price})=>{
    return (
        <div className="w-[200px] p-2 m-2 shadow-lg bg-pink-50">
            <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/"+imageId}/>
            <h2 className='font-bold text-xl'>{name}</h2>
            <h3>Rupees: {price/100}</h3>
            <h4>{description} </h4>
        </div>
    ) 
}

export default FoodItem;