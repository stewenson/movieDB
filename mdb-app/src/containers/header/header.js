import React from 'react';
import {Link} from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import {LinkStyle, TextLink} from "../../styles/LinkStyles";
import '../../styles/Header.scss';
import SearchIcon from '@material-ui/icons/Search';

export default function Header() {

    return (
        <div className='mdb-header'>
            <img width='50' src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg" alt=' '/>
            <LinkStyle>
                <Link className='Link' to="/">
                    <TextLink>
                        <HomeIcon /> Back To Home
                    </TextLink>
                </Link>
            </LinkStyle>
            <LinkStyle>
                <Link className='Link' to="/tmdbapi/searchMovies">
                    <TextLink>
                        <SearchIcon />Search
                    </TextLink>
                </Link>
            </LinkStyle>
        </div>
    );
}