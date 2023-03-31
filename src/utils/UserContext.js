import { createContext } from "react";
//state and props are tied to the component while context is central stored
//it takes in some data which we need all across our application
const UserContext= createContext({
    user:{
    name:"Dummy Name",
    email: "dummy@gamil.com",
    } 
});

export default UserContext;
