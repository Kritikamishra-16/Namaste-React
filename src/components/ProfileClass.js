import React from 'react';
class Profile extends React.Component{
    constructor(props){ //this is called initially when class is loaded
        super(props);
        this.state ={
            UserInfo:{
                name: "dummy name",  
                location: "dummy location"
            }
        } 
        
        console.log("class constructor" + this.props.name)
    } 
    async componentDidMount(){
        const data= await fetch("https://api.github.com/users/Kritikamishra-16");
        const json= await data.json();
        console.log(json);
        this.setState({
            UserInfo: json,
        })
        this.timer= setInterval(()=>{
            console.log("React OP");
        })
        console.log("class componentDidMonut"  + this.props.name)
    }

    componentDidUpdate(){
        console.log("child Component did update");
    }

    componentWillUnmount(){
        clearInterval(this.timer);
    }
    render(){
        console.log("class render"+ this.props.name);
        return( 
            <div>
                <h2>Profile Class Component</h2>
                <h3>Name: {this.state.UserInfo.name}</h3>
                <h3>location: {this.state.UserInfo.location}</h3>
                <img src={this.state.UserInfo.avatar_url}>
                </img>
                
            </div>
            );
    }
}

export default Profile; 