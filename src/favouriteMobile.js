import React from 'react';
import ReactDOM from 'react-dom';

class FavouriteMobile extends React.Component {
    constructor() {
        super();
    };

    state = {
        name: 'Samsung',
        price: 'around Rs 50,000',
        moreInfo: {
            model: 'Galaxy Note 20',
            processor: 'Galaxy Exinos',
            camera: '120Mp',
            battery: '4200MaH'
        }
    };




    handleYes=()=>{
       const mobileName=prompt("What is the mobile name of your suggestion ? ?");
       const mobileprice=prompt("What is the price of your suggestion");
       const model=prompt("What is the model number ?? ");
       const processor=prompt("What is the processor ??");
       const camera=prompt("What is the megapixel of camera ??");
       const battery=prompt("What is the capacity of the battery??");
     
 
       this.setState({
           name:mobileName,
           price:mobileprice,
           moreInfo:{
               ...this.state.moreInfo,
               model:model,
               processor:processor,
           }
       })

       //Now we will use another version of the this.setState()
       
       


    }

    render() {
        if(this.state.name==='Samsung'){

            return ( 
                <div> 
    
                    <div class={'aboutPreviousMobile'} >
    
                        <h1> My mobile name is {this.state.name} </h1>
                        <h1> It's prize is {this.state.prie} </h1>
                        <p> <b>Here are some more info regarding my mobile </b>
    Model:{this.state.moreInfo.model}<br />
    processor: {this.state.moreInfo.processor}<br />
    Camera: {this.state.moreInfo.camera}  <br />
    Battery: {this.state.moreInfo.battery} <br />
                        </p>
                        <h2> Will You like to suggest me another nice mobile phone, other than samsung</h2>
    
                        <button onClick={this.handleYes} > Yes </button>
    
                        <button onClick={() => {
                            const buttons = document.querySelectorAll('button');
                            for (let item of buttons) { item.remove() }
                        }} > No </button>
                    </div>
                </div>
                )
        }
        else{
            
        return ( 
            <div> 

                <div class={'aboutPreviousMobile'} >

                    <h1> mobile name is {this.state.name} </h1>
                    <h1> It's prize is {this.state.price} </h1>
                    <p> <b>Here are some more info regarding the mobile </b>
Model:{this.state.moreInfo.model}<br />
processor: {this.state.moreInfo.processor}<br />
Camera: {this.state.moreInfo.camera}  <br />
Battery: {this.state.moreInfo.battery} <br />
                    </p>
                    <h2> Will You like to suggest me another nice mobile phone, other than Samsung </h2>

                    <button onClick={this.handleYes} > Yes </button>

                    <button onClick={() => {
                        const buttons = document.querySelectorAll('button');
                        for (let item of buttons) { item.remove() }
                    }} > No </button>
                </div>
            </div>
            )
        }
    }
};

export default FavouriteMobile;