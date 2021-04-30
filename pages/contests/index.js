import Head from "next/head";
import React from "react";
import Contests from "../../components/Contests/Contests";
import MainLayout from "../../components/MainLayout/MainLayout";

export default function Index() {
    return (
        <MainLayout>
            <Contests/>
        </MainLayout>
    )
}