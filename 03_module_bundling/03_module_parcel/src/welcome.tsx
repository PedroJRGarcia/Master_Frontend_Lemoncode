import React from "react";
import * as classes from "./welcome.styles.scss";
import * as styles from "./my.styles.scss";
import logo from "./content/logo_2.png";
import neipa from "./content/neipa.jpeg";

export const Welcome: React.FC = () => {
    return (
    <div>
        <h1 className={styles.background}>Hello World from React DOM</h1>
        <div className="card" style={{width: 370}}>
            <div className="card-body">
                <h5 className="card-title">React & Typescript</h5>
                <img src={logo} alt="lemoncodelogo" />
                <p className={classes.resultBackground}>
                    Some quick example text to build on the card title and make up the 
                    bulk of the card's content.
                </p>
                <img src={neipa} alt="neipalogo" />
                <a href="#" className="btn btn-primary">
                Go somewhere
                </a>
            </div>
        </div>
    </div>
    );
};