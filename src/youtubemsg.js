

import React from 'react';

class Youtubemsg extends React.Component{
    constructor(){
        super();
        this.state={
            displayMsg:'Subscribe to my youtube Channel',
            msg:'Subscribe',
        };
    };

    
    ChangeMsg=()=>{
        if(this.state.msg==='Subscribe'){
            this.setState({
                displayMsg:'Click on the bell incon to never miss an video',
                msg:'Click On Bell Icon',
            })
        };
        if(this.state.msg==='Click On Bell Icon'){
            this.setState({
                displayMsg:'Thank You For Being The Part Of Family',
                msg:'Thanks',
            })
        };
    }
    render(){
        return(
            <>
             <h1> {this.state.displayMsg} </h1>
             <button
              onClick= {this.ChangeMsg}
             > {this.state.msg} </button>
            </>
        )
    }
};

export default Youtubemsg;