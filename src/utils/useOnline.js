import { useState,useEffect } from "react";
const useOnline=  ()=>{
    const [isOnline, setIsOnline]=useState(true);
    
    useEffect(()=>{

        const handleOnline=()=>{
            //if we go online this will run
            setIsOnline(true);
        };

        const handleOffline=()=>{
            //if we go online this will run
            setIsOnline(false);
        };

        window.addEventListener("online",handleOnline);
        window.addEventListener("offline",handleOffline);

        return()=>{
            window.addEventListener("online",handleOnline);
            window.addEventListener("offline",handleOffline);
        }

    },[])

    return isOnline;
}

export default useOnline;

