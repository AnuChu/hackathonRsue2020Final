import Head from "next/head";
import MainLayout from "../../components/MainLayout/MainLayout";
import React from "react";
import Team from "../../components/Team/Team";


export default function Index() {
    return (
        <MainLayout>
            <Team/>
        </MainLayout>
    )
}