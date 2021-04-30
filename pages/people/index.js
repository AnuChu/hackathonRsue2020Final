import Head from "next/head";
import MainLayout from "../../components/MainLayout/MainLayout";
import React from "react";
import People from "../../components/People/People";


export default function Index() {
    return (
        <MainLayout>
            <People/>
        </MainLayout>
    )
}