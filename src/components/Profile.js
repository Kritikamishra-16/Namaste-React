import { setIn } from "formik";
import { useEffect, useState } from "react";
const Profile= (props)=>{
    const [count, setCount]= useState(0);
    const [count2, setCount2]= useState(0);
    useEffect(()=>{
        const timer=setInterval(()=>{
            console.log("React OP");
        },1000);

        return ()=>{
            clearInterval(t);
        }
    },[]);
    return (
        <div>
            <h2>Profile Functional Component</h2>
            <h3>Name: {props.name}</h3>
            <h3>Count : {count}</h3>
            <button onClick={()=>{
                setCount(1);
                setCount2(1);
            }
            }>Count</button>
        </div>
    );
}
export default Profile;