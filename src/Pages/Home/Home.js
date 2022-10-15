import React from "react";

import Header from "containers/Header/Header";
import Sidebar from "containers/Sidebar/Sidebar";
import ScrolledFeed from "containers/ScrolledFeed/ScrolledFeed";
import { FlexContainer, Main } from "./Home.style";
import HomeList from "containers/HomeList/HomeList";

function Home() {
  return (
    <>
      <Header />
      <FlexContainer>
        <Sidebar />
        <Main>
          <ScrolledFeed />
          <HomeList />
        </Main>
      </FlexContainer>
    </>
  );
}

export default Home;
