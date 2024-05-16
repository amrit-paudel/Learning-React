import React from 'react';

class Clock extends React.Component{
    constructor(){
        super();
        this.state={
            currentDate:'',
        }
    };

    componentWillMount(){
        this.setState({
            currentDate:new Date().toLocaleTimeString(),
        })
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState(
                {
                    currentDate:new Date().toLocaleTimeString(),
                }
            )
        },1000)
    }

    render(){
        return(
            <div >
                <h1> The Current Time is {this.state.currentDate} </h1>
            </div>
        )
    }
};

export default Clock;