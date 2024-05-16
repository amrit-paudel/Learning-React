import React from 'react';

class ClickingCounter extends React.Component{
    state={
        count:1,
    };

    handleClick=()=>{

        
         // here doing this will cause error because this.setState() is updated asynchorously
         // i.e
        /* console.log(this.state.count);
          this.setState({
              count:this.state.count+1, // don't do this 
              // even though it works 
              // rather use a function 
          })
          console.log(this.state.count);
          */
        this.setState(
            (state,props)=>{console.log(state);
                console.log( "Props is :"+ props);

                
             return{ count:state.count+1,}
            }
        )
    }
    render(){
        return(<div>
           <button onClick={this.handleClick} > Increase </button> <h1> {this.state.count} </h1>
        </div>)
    }
};

export default ClickingCounter;