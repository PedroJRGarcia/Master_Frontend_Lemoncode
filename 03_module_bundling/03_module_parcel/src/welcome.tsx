import React from "react";
import "./welcome.styles.scss";
import "./my.styles.scss";
import logo from "./content/logo_2.png";
import neipa from "./content/neipa.jpeg";

export const Welcome: React.FC = () => {
    return (
    <div>
        <div className="container" style={{width: 370}}>
        <h1 className="subtitle">Hello World from React DOM</h1>
            <div className="card-body">
                <h5 className="background">React & Typescript</h5>
                <img src={logo} alt="lemoncodelogo" />
                <p className="result-background">
                    Some quick example text to build on the card title and make up the 
                    bulk of the card's content.
                </p>
                <img src={neipa} alt="neipalogo" />
                <div>
                    <a href="#" className="button">
                    Click here
                    </a>
                </div>
            </div>
        </div>
    </div>
    );
};