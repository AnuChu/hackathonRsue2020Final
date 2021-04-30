import Head from "next/head";
import MainLayout from "../../components/MainLayout/MainLayout";
import React from "react";
import Team from "../../components/Team/Team";
import Scrollspy from 'react-scrollspy'


export default function Index() {
    return (
        <MainLayout>

            <div>

                <Scrollspy items={ ['1', '2', '3'] } currentClassName="is-current">
                    <li><a href="#1">section 1</a></li>
                    <li><a href="#2">section 2</a></li>
                    <li><a href="#3">section 3</a></li>
                </Scrollspy>

                <div>
                    <div id="1">section 1</div>
                    <div id="2">section 2</div>
                    <div id="3">section 3</div>
                </div>



            </div>

        </MainLayout>
    )
}