import Head from "next/head";
import React from "react";
import MainLayout from "../../components/MainLayout/MainLayout";
import Monitoring from "../../components/Monitoring/Monitoring";

export default function Index() {
    return (
        <MainLayout>
            <Monitoring/>
        </MainLayout>
    )
}