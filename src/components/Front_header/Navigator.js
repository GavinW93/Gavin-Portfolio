import React from 'react';
import './Navigator.css';
export default class Nav extends React.Component {
    render(){
        return(
            <nav class="topnav" id="myTopnav">
            <div>
                <a href="#main-container" class="active">Info</a>
                <a href="#main-container2">Portfolio</a>
                <a href="#main-container3">Contact</a>
               
                 </div>
        </nav>
        )
        
    }
}


        