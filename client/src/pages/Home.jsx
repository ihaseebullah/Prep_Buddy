import React from "react";
import Page from "../components/Page";
import HomeSkeleton from "../components/HomeSkeleton";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return <Page>
    <HomeSkeleton />
    <Sidebar />
  </Page>;
}
