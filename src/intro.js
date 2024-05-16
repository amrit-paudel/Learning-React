
// simple project 1
// lets create a simple project where user puts his asked information and then 
// shows those values on the screen

import React from 'react'

class Intro extends React.Component {
    constructor() {
        super();

    };

    state = {
        getValues: ['name', 'address', 'phone', 'Education'],
        i: 0,   // here accidently I do a good thing, keeping something like index or anything is super useful 
                // especially when handling data inside the state.
                
        obtainedValues: [],
    };

    // function to set the inputed data inside state
    setValuesData = (e) => {
        if (this.state.i === this.state.getValues.length - 1) { console.log(this.state.obtainedValues) }
        e.preventDefault();

        const valueHolder = document.getElementById('valueHolder');
        let i = this.state.i;
        this.setState({
            obtainedValues: this.state.obtainedValues.concat(valueHolder.value),
            i: this.state.i + 1,
        })
        valueHolder.value = "";

    }


    render() {
        const getCurrent = this.state.getValues[this.state.i];
        if ( this.state.i < this.state.getValues.length ) {

            return (<div
            style={
                {
                    width:"100%",
                    height:"100vh",
                    backgroundColor:"green",
                    display:"flex",
                    alignItems:'center',
                    justifyContent:'center',
                }
            }
            >
                <form onSubmit={this.setValuesData}
                style={
                    {
                        backgroundColor:'green',
                        width:"10vw0",
                        height:"100vh",
                        display:'flex',
                        flexDirection:'column',
                        alignItems:'center',
                        justifyContent:'space-around'
                    }
                }
                >
                    <h1> What is Your {getCurrent} </h1>
                    <input id={'valueHolder'} placeholder={` Enter the ${getCurrent} `} />
                    <button> Submit </button>
                </form>
            </div>)
        }
        else{
            console.log(this.state.obtainedValues)
            const values=this.state.getValues;
           const displayValues= values.map((item , index)=>{
                return(
                    <div
                    style={
                        {
                            width:"100%",
                            height:"100vh",
                            backgroundColor:"green",
                            display:"flex",
                            alignItems:'center',
                            justifyContent:'center',
                        }
                    }
                    >
                        <h1> Your {item} is {this.state.obtainedValues[index]} </h1>
                    </div>
                )
            });
            return(displayValues);
            
        }
    }
};

export default Intro;