import React from 'react';
import MainBody from'./mainbody';
import './navbar.css';
class Navbar extends React.Component{

    state={
        navLinksKeywords:['home','contact','about me'],
        clickedKeyword:'home'
    };

    handleClick=(e)=>{
        this.setState({
            clickedKeyword:e.target.text.toLowerCase()
        })
    }

    render(){
        const navLinks=this.state.navLinksKeywords.map((keyword)=>(<li>
            <a href="#" onClick={this.handleClick} > { keyword.toUpperCase() } </a>
        </li>));
        return(
            <div>
                <div className="navbar" >
            {navLinks}
        </div>

        <MainBody linkKeyword={this.state.clickedKeyword} />
            </div>
        )
    }
};

export default Navbar;