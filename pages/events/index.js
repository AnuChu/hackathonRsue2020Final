import Head from "next/head";
import React from "react";
import Events from "../../components/Events/Events";
import MainLayout from "../../components/MainLayout/MainLayout";

export default function Index() {
    return (
        <MainLayout>
            <Events/>
        </MainLayout>
    )
}