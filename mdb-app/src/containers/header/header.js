import React from 'react';
import {Link} from "react-router-dom";
// import HomeIcon from "@material-ui/icons/Home";
// import {LinkStyle, TextLink} from "../../styles/LinkStyles";
import '../../styles/Header.scss';
// import SearchIcon from '@material-ui/icons/Search';

export const Header =()=> {

    function toggle() {
        let header = document.getElementById('header')
        header.classList.toggle('active')
    }

    return (
        <header id="header">
            <img className='logo' src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg" alt=' '/>
            <ul>
                <li>
                    <Link to="/" onClick={toggle}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/tmdbapi/movie" onClick={toggle}>
                        Movie
                    </Link>
                </li>
                <li>
                    <Link to="/tmdbapi/tv" onClick={toggle}>
                        Tv
                    </Link>
                </li>
                <li>
                    <Link to="/tmdbapi/searchMovies" onClick={toggle}>
                        Discover
                    </Link>
                </li>
                <li>
                    <Link to="/tmdbapi/about" onClick={toggle}>
                        About
                    </Link>
                </li>
            </ul>
            <div className='toggle' onClick={toggle}> </div>
        </header>
    );
}