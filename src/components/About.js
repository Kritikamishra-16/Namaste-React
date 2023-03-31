import { Outlet } from "react-router-dom";
import ProfileClassComponent from "./ProfileClass";
import ProfileFunctionalComponent from "./Profile";
import React from 'react';
import UserContext from "../utils/UserContext"; //we will use it as acomponent here in class component bcz here we dont have any hooks

class About extends React.Component{
    constructor(props){
        super(props);
        //best place to initialize the state 
        console.log("Partent constructor");
    }  
    componentDidMount(){
        //best place to make an api calls
        console.log("Parent componentDidMount")
    }
    render(){
        console.log("Parent render");
        return (
            <div>
                <h1>About Us Page</h1>

                {/**Using context here */}
                <UserContext.Consumer>
                    { //this takes in jsx which is a function and this function has a value of whatever this Context holds
                    ({user})=> //destructuring 
                    <h4 className="font-bold p-10 text-xl">{user.name} -{user.email}</h4>
                    }
                </UserContext.Consumer>

                <p>This is namaste react livecourse chapter 7-Finding the path :🚀
                </p>
                {/**Only one children -:it will complete to lifecycle of chid */}
                <ProfileClassComponent name={"First Child"}/>
                <Outlet/>
            </div>
        )
    }
}

export default About;