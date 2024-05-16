import React from 'react';

class SimpleForm extends React.Component{
    state={
        name:'',
        email:'',
        about:'',
        hobby:'  Write Something about yourself  ',

        showform:false,
    };


    handleChange=(e)=>{
        this.setState({
            [e.target.id]:e.target.value,
        }
        )
    };

    showForm=(e)=>{
        this.setState({
            showform:true,
        })
    }

    render(){
        return(
            <div>
                
            { !this.state.showform &&
            
            <div className={'simpleForm'} onChange={this.handleChange} > <br/><br/><br/><br/><br/>
                <label for={"name"} > Name </label>
                <input id={"name"} name={"userName"} type={'text'} /> <br/><br/><br/><br/>
                <label for={'email'} > E-mail </label>
                <input id="email" type={'email'} name={'emailId'} /> <br/><br/><br/><br/>
                <label for= "about"> Write about yourself </label> <br/><br/><br/><br/>
                <textarea  id="about"  /> <br/><br/><br/><br/><br/>
                <select id="hobby" >
                    <option value="singing" > Singing  </option>
                    <option value="Dancing" > Dancing  </option>
                    <option value="Coding" > Coding  </option>
                    <option value="reading" > Reading  </option>
                </select> <br/><br/><br/><br/><br/><br/><br/><br/>

                <button onClick={this.showForm} > Click To See Your Form </button> 

            </div>  }

            { 
            this.state.showform &&
            
            <div className="showFormDate" >
                <h1> Name : {this.state.name} </h1>
                <h1>E-mail : {this.state.email} </h1>
                <h1> About {this.state.name} : </h1> <br/>
                <h2> {this.state.about} </h2>
                <h1> Hobby : {this.state.hobby} </h1>
            </div>
            }

            </div>
        )
    }
};

export default SimpleForm;