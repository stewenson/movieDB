import React from "react";
import './card.scss';

export const Card = ({img, name, character}) => {

    let photo;
    if (img) {
        photo = `http://image.tmdb.org/t/p/w154/`+ img;
    } else {
        photo = 'https://i.pinimg.com/originals/4c/9e/b8/4c9eb8648c560dae6719b134950f6ac3.jpg';
    }

    return (
        <div  className='mdb-card'>
            <div className='mdb-poster'>
                <img src={photo} alt=""/>
            </div>
            <div className='mdb-details'>
                <h3>{name}
                <br/>
                <span>{character}</span>
                </h3>
            </div>
        </div>
    )
}