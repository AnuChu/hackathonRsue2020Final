import NavButton from "./NavButton";
import React from "react";

const NavBar = props => {

    return (
        <header>
            <div className={"wrapper"}>
                {props.navButtons.map((button, index) =>
                <NavButton
                    key={index}
                    icon={button.icon}
                    path={button.path}
                    label={button.label}/>
                )}
            </div>
        </header>
    )
}

export default NavBar;

