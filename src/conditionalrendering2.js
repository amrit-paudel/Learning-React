import React from 'react';


function UserGreeting(props){
    return(<h1> Hello Welcome User </h1>)
};

function GuestGreeting(props){
    return( <h1> Please Sign in </h1> )
};

class Greeting extends React.Component{
    
    state={
        loggedIn:true,
    };

    

    render(){

        let greetingUser;
        if(this.state.loggedIn){ greetingUser=<UserGreeting/> }
        else{ greetingUser=<GuestGreeting/> }

        return(greetingUser);
    }
};

export default Greeting;