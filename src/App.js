import React from "react";
// import { BrowserRouter, Switch, Route } from "react-router-dom";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Journal from "./pages/Journal";
import QuillBot from "./pages/Journals/Quillbot";
import SearchResults from "./pages/SearchResults";
import Works from "./pages/Works";
import WorksInside from "./pages/WorksInside";
import page404 from "./pages/404";
import UserInterface from "./pages/UserInterface";
import Yono from "./pages/Journals/Yono";
import nft from "./pages/Journals/NFT";
import Metaverse from "./pages/Journals/Metaverse";

function App() {
  return (

    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route exact path={"/"} element={<Home />}></Route>

        {/* <Route
          path={`/`}
          component={Home}
          exact
        /> */}
        {/* <Route

          path={`/about`}
          component={About}
        />
        <Route

          path={`${process.env.PUBLIC_URL + "/about"}`}
          component={About}
        />
        <Route

          path={`${process.env.PUBLIC_URL + "/contacts"}`}
          component={Contacts}
        />
        <Route

          path={`${process.env.PUBLIC_URL + "/journal"}`}
          component={Journal}
        />
        <Route

          path={`${process.env.PUBLIC_URL + "/ux-research"}`}
          component={Journal}
        />
        <Route

          path={`${process.env.PUBLIC_URL + "/ux-quillbot-case-study"}`}
          component={QuillBot}
        />

        <Route

          path={`${process.env.PUBLIC_URL + "/ux-yono-case-study"}`}
          component={Yono}
        />

        <Route

          path={`${process.env.PUBLIC_URL + "/ux-nft-case-study"}`}
          component={nft}
        />

        <Route
          exact
          path={`${process.env.PUBLIC_URL + "/Tech-metaverse"}`}
          component={Metaverse}
        />

        <Route
          exact
          path={`${process.env.PUBLIC_URL + "/search-results"}`}
          component={SearchResults}
        />

        <Route
          exact
          path={`${process.env.PUBLIC_URL + "/works"}`}
          component={Works}
        />

        <Route
          exact
          path={`${process.env.PUBLIC_URL + "/ui"}`}
          component={UserInterface}
        />

        <Route
          exact
          path={`${process.env.PUBLIC_URL + "/works-inside"}`}
          component={WorksInside}
        /> */}
      </Routes>

      {/* <Route exact component={page404} /> */}
    </BrowserRouter>
  );
}

export default App;
