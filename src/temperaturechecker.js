import React from 'react';

class Temperature extends React.Component{
    state={
        tempr:'',
        scale:'',
        isSubmitted:false,
    };

    handleChange=(e)=>{
        this.setState(
            {
                [e.target.id]:e.target.value,
            }
        )
    };

    handleSubmit=(e)=>{
        this.setState(
            (state)=>{
                return { isSubmitted:!state.isSubmitted }
            }
        )
    }

    render(){
        console.log(this.state.tempr);
        console.log(this.state.scale);
        return(
            <div>
                { !this.state.isSubmitted && 
                <form onChange={this.handleChange} onSubmit={this.handleSubmit} >
                <label for="scale"> Celsius </label>
                <input type="radio" value="celsius" name="scale" id="scale" />
                <label for="scale" > Farenheight </label>
                <input type="radio" value="farenheight" name="scale" id="scale"  /> <br/><br/>

                { this.state.scale && <> 
                <label for="tempr" > Enter the temperature in {this.state.scale} </label>
                <input id="tempr" type="number" />  </>}
                <br/> <br/>
                <button> Submit </button>
                </form>  }

                { this.state.isSubmitted && <>  
                 < CelsiusChecker stateValue= {this.state} />
                 <FarenheightChecker stateValue={this.state} />
                 </> }
                 
            </div>
        )
    }
};

export default Temperature;


function CelsiusChecker(props){
    let { tempr,scale }=props.stateValue;
    if(scale==='farenheight'){
        let newTempr = ((Number(tempr)-32)*(5/9));
        tempr=newTempr;
        scale='celsius'
    };

    if(tempr<100){
        return(
            <div>
                <h1> The temperature in {scale} is {tempr} so </h1>
                <h1> Water will not boil </h1>
            </div>
        )
    }
    else{
        return(
            <div>
                <h1> The temperature in {scale} is {tempr} so </h1> 
                <h1> Water will boil  </h1>
            </div>
        )
    }
};

function FarenheightChecker(props){
    let { tempr,scale }=props.stateValue;
    if(scale==='celsius'){
        let newTempr = (((9/5)*Number(tempr))+32);
        tempr=newTempr;
        scale='farenheight';
    };

    if(tempr<212){
        return(
            <div>
                <h1> The temperature in {scale} is {tempr} so </h1> 
                <h1> Water will not boil </h1>
            </div>
        )
    }
    else{
        return(
            <div>
                <h1> The temperature in {scale} is {tempr} so </h1> 
                <h1> Water will boil  </h1>
            </div>
        )
    }
};

