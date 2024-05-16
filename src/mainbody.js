import React from 'react';

class MainBody extends React.Component {

    state = {
        home: {
            title: 'Welcome Home',
            desc: `This is our main home page.
                   here we mostly post recent news and any
                   new notice. ALso we will be posting the 
                   achievements achieved by most of our students
                   and our previous employees all around the 
                   world. `,
            imgsrc: 'https://images.pexels.com/photos/2896668/pexels-photo-2896668.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
        },

        contact: {
            title: 'Please fill the given form to keep in touch with us',
            desc: ` By filling the above form you will be regestered 
                   in our data base and we can contact you when we want which will
                   also help in building trust among our other cliets and new members. `,
            imgsrc: 'https://images.pexels.com/photos/263564/pexels-photo-263564.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',

        },

        aboutme: {
            title: ' Know Me ',
            desc: ` I am a front end developer from Nepal.
                   Currently I am doing my internship in
                   one of the reputed company of my country.
                   I am looking forward to take a masters degree from a 
                   foreign country in some of the exciting fields 
                   that are going to pop out in near future. `,
            imgsrc: 'https://images.pexels.com/photos/618613/pexels-photo-618613.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        }
    };
    

    render() {

        
        // Initially our linkKeyword may have space in between the words so 
        // removing the space 
        let { linkKeyword } = this.props;
        let linkKeywordWithoutSpace = ((linkKeyword) => {
            let linkKeywordArr = linkKeyword.trim().split("");  //  yeha trim()  garaenaa vannae paxi splice()  method confuse hunaa sakxaa kinaa ki suru raw last maa pani space present hunxaa. SO always try using trim() 
            if (linkKeywordArr.includes(' ')) {
                linkKeywordArr.splice(linkKeywordArr.indexOf(' '), 1);
                linkKeyword = linkKeywordArr.join('');
            };


            return linkKeyword;
        })(linkKeyword);


        //  Now accessing the keys of the state, since one of the keys matches the 
        // props linkKeyword 
        
        const stateKeys = Object.keys(this.state);
        const mainBodyElements = stateKeys.map((key) => {
            return key === linkKeywordWithoutSpace.trim() && <>

            <h1> {this.state[key].title} </h1>
            <h3> {this.state[key].desc}</h3>
            <img src={this.state[key].imgsrc} alt={'  '} />
        </>
        })

        return (<div className={'mainBody'} >
            { mainBodyElements }
        </div>)
    }
};

export default MainBody;