import React from "react";
import "../stylesheet/navStyle.css";
import { Link } from 'react-router-dom'; 
import logo from "../image/LightLogo.png";

export default class Navbar extends React.Component{
    state = {

    };

    render() {
        return(
            <nav className="navbar" style={{color:"#1c2e4a"}}>
                <img src={logo} alt='logo' className="logo"></img>
                <a href="https://LightxAman.github.io/" className="home-name">Aman Sharma</a>
                <div className="navigation-menu">
                    <ul>
                        <li className="navigation-menu_li">
                            <Link to="/certs" className="link1">Certificates</Link>
                        </li>
                        <li className="navigation-menu_li">
                            <Link to="/projects" className="link1">Projects</Link>
                        </li>  
                        <li className="navigation-menu_li">
                        <a href="https://www.linkedin.com/in/amanxlight/" rel="noreferrer noopener" target="_blank">LinkedIn</a>
                        </li>
                        <li className="navigation-menu_end">
                        <a href="https://github.com/LightxAman" rel="noreferrer noopener" target="_blank">GitHub</a>
                        </li>
                    </ul>
                </div>

            </nav>
        )
    }
    
    contact(){
        alert("\nPersonal: amanxlight@gmail.com")
    }
}

