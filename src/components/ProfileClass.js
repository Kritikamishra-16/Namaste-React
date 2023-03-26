import React from 'react';
class Profile extends React.Component{
    constructor(props){ //this is called initially when class is loaded
        super(props);
        //create state variable
        //const [count, setCount]= useState(0);
        // const [count2, setCount2]= useState(0);
        this.state={ //it is an object all the state variables are created as apart of one object
            count:0,
            count2:0,
        };
        console.log("class constructor" + this.props.name)
    }
    componentDidMount(){
        console.log("class componentDidMonut"  + this.props.name)
    }
    render(){
        console.log("class render"+ this.props.name);
        return( 
            <div>
                <h2>Profile Class Component</h2>
                <h3>Name: {this.props.name}</h3>
                <h3>Count: {this.state.count}</h3>
                <button onClick={()=>
                //we do not mutate state variable directly
                    this.setState({ //here we send a modified object
                        count:1,   //we can update all the state variables togeather     
                        count2: 2,
                    })
                } 
                >Count</button>
            </div>
            );
    }
}

export default Profile; 