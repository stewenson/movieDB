import React from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";
import Header from "./containers/header/header";
import home from "./screens/home/home";
import DetailMovie from "./screens/detailMovie/detailMovie";
import SearchMovie from "./screens/searchMovie/searchMovie";

function App() {
  return (
    <div className="App">
      <Header/>
        <Switch>
          <Route exact path='/' component={home} />
          <Route  path="/tmdbapi/:path/detail/:category/:original_title/:id" component={DetailMovie} />
          <Route  path="/tmdbapi/searchMovies" component={SearchMovie} />
        </Switch>
    </div>
  );
}

export default App;
