import Link from "next/link";
import {withRouter} from "next/router";
import React from "react";

const NavButton = props => (
    <Link href={props.path}>
        <div>
            <div
                className={`icon ${
                    props.router.pathname === props.path ? "active" : ""
                }`}
            >
                <div className={"svg-icon"}>{props.icon}</div>
            </div>


            <div
                className={`text ${
                    props.router.pathname === props.path ? "active" : ""
                }`}
            >
                {props.label}
            </div>
            </div>
    </Link>
);

export default withRouter(NavButton);