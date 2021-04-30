import Head from "next/head";
import MainLayout from "../components/MainLayout/MainLayout";
import React from "react";
import Main from "../components/Main/Main";

export default function Index() {
    return (
        <MainLayout>
            <Main/>
        </MainLayout>
    )
}