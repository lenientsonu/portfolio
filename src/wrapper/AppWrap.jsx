import React from "react";
import NavigationDots from "../components/NavigationDots";
import SocialMedia from "../components/SocialMedia";

const AppWrap = (props) => {
    return (
        <div id={props.idName} className={`app__container ${props.className}`}>
            <SocialMedia />

            <div className='app__wrapper app__flex'>
                {props.children}

                <div className='copyright'>
                    <p className='p-text'>@2023 SONU</p>
                    <p className='p-text'>All Rights Reserved</p>
                </div>
            </div>

            <NavigationDots active={props.idName} />
        </div>
    );
};

export default AppWrap;
