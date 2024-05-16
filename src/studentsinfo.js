import React from 'react';

class Students extends React.Component{
    state={
        info:[
            {
                name:'Amrit',
                age:'20',
                address:'Ratnanagar Chitwan Nepal',
                grade:" Bachelor's running ",
                major:'Computer Engineering',
                college:' Pulchowk Campus ',
            },
            
            {
                name:'Ram',
                age:'22',
                address:' Bharatpur Ksetrapur ',
                grade:" Bachelor's running ",
                major:' Bsc Physics ',
                college:' Birendra multiple campus ',
            },
            
            {
                name:'Shayam',
                age:'18',
                address:' Itahari, Sunsari ',
                grade:" 12 ",
                major:' Physic, Chemistry and Maths ',
                college:' Moonlight College ',
            }
        ]
    };

    render(){

        return(
            <div>
                <Introduction studentsInfo={this.state.info} />
                <Academics studentsInfo={this.state.info} />
            </div>
        )
    }
};

export default Students;

function Introduction({studentsInfo}){

    const introElements=studentsInfo.map( (student)=>{
        return (<div>
            <h1> Hello I am {student.name}. I am {student.age}  years old. I live in {student.address} </h1>
        </div>)
    } );

    return(<> {introElements} </>);
}

function Academics( {studentsInfo} ){
    const AcademicsElements=studentsInfo.map((student)=>{
        return( <h1> {student.name} reads in {student.grade} and he is doing major in {student.major}. Also The name od his college is {student.college} </h1>  )
    });

    return( <> {AcademicsElements} </> )
};
