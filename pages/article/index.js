import Head from "next/head";
import React from "react";
import Article from "../../components/Article/Article";
import MainLayout from "../../components/MainLayout/MainLayout";

export default function Index() {
    return (
        <MainLayout>
            <Article/>
        </MainLayout>
    )
}