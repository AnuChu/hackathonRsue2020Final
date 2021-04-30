import Head from "next/head";
import NavBar from "../Navbar/NavBar";
import navButtons from "../Navbar/buttons";
import React from "react";

const MainLayout = props => {
    return (
        <div className={"container"}>
            <div className={"main"}>
                <div className={"navbar"}>
                    <NavBar navButtons={navButtons}/>
                </div>
                <div className={"content"}>
                    <div className={"navbar-about"}>
                        <div className={"nav-block"}>
                            <img src={"/images/icon/notification.svg"} alt={""} width={"25px"} height={"25px"}/>
                        </div>
                        <div className={"nav-block"}>
                            <img src={"/images/icon/person.svg"} alt={""} width={"45px"} height={"45px"}/>
                        </div>
                        <div className={"nav-name"}>Username F.</div>
                    </div>
                    <div>{props.children}</div>
                </div>
            </div>
        </div>
    );
};

export default MainLayout;

