import React from 'react';

class GetANumber extends React.Component {
    state = {
        num: '',
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const inputNum = document.getElementById('inputNum').value;
        this.setState({
            num: inputNum,
        }
        )
    }

    render() {
        return (
            <div>
                { !this.state.num &&  //  this means this.state.num  maa falsy value hudaa samma matrai hamlae yo component lai render garaunaa
                                      // chanxam 
                                      // which also means truthy value hudaa render hudainaa 
                                      
                    <form onSubmit={this.handleSubmit} >
                        <h3> Enter a Number by which you wish to Increase any number </h3>
                        <input type={'number'} id={'inputNum'} />
                        <button> Submit </button>
                    </form>}

                { this.state.num &&     // this means this.state.num  maa truthy value hudaa matrai hamlae yo component lai render garaunaa
                                        // chanxam 
                                        // which also means falsy value hudaa render hudainaa 

                    <IncreaseAnyNumber increasingNum={this.state.num} />}

            </div>
        )
    }
};

export default GetANumber;

class IncreaseAnyNumber extends React.Component {
    state = {
        num: '',
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const numberToIncrease = document.getElementById('inputIncreasingNum').value;
        this.setState(
            function (state, props) { return { num: Number(numberToIncrease) + Number(props.increasingNum) } }
        )
    }
    render() {
        console.log(this.state.num);
        return (
            <div>
                { !this.state.num &&
                    <form onSubmit={this.handleSubmit} >

                        <h4> Enter a number you wish to increase by {this.props.increasingNum} </h4>
                        <input type={'number'} id="inputIncreasingNum" />
                        <button> Submit </button>
                    </form>}

                { this.state.num && <h1> The number is {this.state.num} </h1>}
            </div>
        )
    }
}