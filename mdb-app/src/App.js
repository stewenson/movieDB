import React from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";
import {Header} from "./containers/header/header";
import home from "./screens/home/home";
import {Movie} from "./screens/movie/movie";
import {Tv} from "./screens/tv/tv";
import DetailMovie from "./screens/detailMovie/detailMovie";
import SearchMovie from "./screens/searchMovie/searchMovie";

function App() {
  return (
    <React.Fragment>
      <Header/>
      <main style={{ paddingTop: '60px'}}>
        <Switch>
          <Route exact path='/' component={home} />
          <Route exact path='/tmdbapi/movie' component={Movie} />
          <Route exact path='/tmdbapi/tv' component={Tv} />
          <Route  path="/tmdbapi/:path/detail/:category/:original_title/:id" component={DetailMovie} />
          <Route  path="/tmdbapi/searchMovies" component={SearchMovie} />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
