import React from 'react';

class Students extends React.Component {
    state = {
        students: ['Ram', 'Shayam', 'Hari'],
        ram: {
            fullname: 'Ram Sharma',
            fathername: 'Bam Sharma',
            mothername: 'Lina Sharma',
        },
        shayam: {
            fullname: 'Shayam Sharma',
            fathername: 'Bhoja Sharma',
            mothername: 'Guna Sharma',
        },
        hari: {
            fullname: 'Hari Sharma',
            fathername: 'Bahadur Sharma',
            mothername: 'Rina Sharma',
        },
    };

    render() {
        return (<div>
            <div class={'totalStudents'} >
                <h1>total Students are</h1> <ul>
                    {
                        (() => {
                            const students = this.state.students.map((item) => (<li> {item} </li>));
                            return students;
                        })()
                    }
                </ul>

                <Ram about={this.state.ram} />
                <Shayam about={this.state.shayam} />
                <Hari about={this.state.hari} />

            </div>
        </div>)
    }
};

class Ram extends React.Component {
    constructor(props) {
        super(props);

        
    };

    render(){
        const { fathername, mothername } = this.props.about;
        return(
            <>
             
            <h1> Hi I am Ram </h1>
            <h2>
                My father's name is {fathername}
            </h2>
            <h2> My mother's name is {mothername} </h2>
            </>
            
        )
    }
};

class Shayam extends React.Component {
    constructor(props) {
        super(props);

        
    };

    render(){
        const { fathername, mothername } = this.props.about;
        return(
            <>
             
            <h1> Hi I am Shayam </h1>
            <h2>
                My father's name is {fathername}
            </h2>
            <h2> My mother's name is {mothername} </h2>
            </>
            
        )
    }
};

class Hari extends React.Component {
    constructor(props) {
        super(props);

        
    };

    render(){
        const { fathername, mothername } = this.props.about;
        return(
            <>
             
            <h1> Hi I am Hari </h1>
            <h2>
                My father's name is {fathername}
            </h2>
            <h2> My mother's name is {mothername} </h2>
            </>
            
        )
    }
};


export default Students;