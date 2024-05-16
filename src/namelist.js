import React from 'react';

class NameList extends React.Component{
    state={
        peopleList:[
            {
                name:'Amrit',
                age:'20',
                id:1,
            },
            {
                name:'Ram',
                age:'22',
                id:2
            },
            {
                name:'Shayam',
                age:'24',
                id:3,
            }
        ]
    };

    render(){

        const peopleListElements=this.state.peopleList.map((person)=><h1 key={person.id} > name: {person.name} And age:  {person.age} </h1>);
        // here we have given a unique key to each of the elelments 
        // key could be anything number, strings, just need to be unique
        // just remove the key above and look at the console what is said.
        
        return(
            <div>
                {peopleListElements}
            </div>
        )
    }
};

export default NameList;


