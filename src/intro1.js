import React from 'react';

// here in this project we are trying to learn Composition. 
// We will make various components, and then we will compose them 
// thogether in any component as per our need. 

function GetName({name}){
    return(<h1> Name: {name} </h1>)
};

function GetAddress({address}){
    return(<h1> Address : {address} </h1>)
};

function GetPhone({phone}){
    return(<h1> Phone : {phone} </h1>)
};

function GetEducationStatus({education}){
    return(<h1> Education Status : {education} </h1>)
};

function GetMariatialStatus(props){
    return(<h1> I am {props.status} </h1>)
}



// this is the advantage of making the functional components . 
// Here all those components behaves just like a function now we could 
// pass data to them through props . 

function Intro(){
    return(<div>
        <GetName name={'Amrit poudel'}/>
        <GetAddress address={'Ratnanagar Chitwan'}/>
        <GetPhone phone={'9840505111'}/>
        <GetEducationStatus education={" Bachelor's Running "}/>
        <GetMariatialStatus status={ 'Married' } />
    </div>)
}

export default Intro;
