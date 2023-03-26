import { Outlet } from "react-router-dom";
import ProfileClassComponent from "./ProfileClass";
import ProfileFunctionalComponent from "./Profile";
import React from 'react';

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
                <p>This is namaste react livecourse chapter 7-Finding the path :🚀
                </p>
                {/**Only one children -:it will complete to lifecycle of chid */}
                <ProfileClassComponent name={"First Child"}/>
                <ProfileClassComponent name={"Second Child"}/>

            </div>
        )
    }
}

export default About;