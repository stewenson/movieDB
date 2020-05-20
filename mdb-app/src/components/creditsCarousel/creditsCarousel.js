import React, {useEffect, useState} from 'react';
import Swiper from 'react-id-swiper';
import './creditsCarousel.scss';
import {useDispatch} from "react-redux";
import {Card} from "../card/card";
import {params} from "./params";
import {clearCredits} from "../../redux/actions/detail/clearCredits";
import '../card/card.scss';

export const CreditsCaousel = (props) => {
    const dispatch = useDispatch();
    const [loading, setLoading]=useState(false);

    useEffect(() => {
        if (props.casts)
            setLoading(false)
    },[loading, dispatch, props.casts]);

    useEffect(() => {
        return  () => {
            setLoading(true);
            dispatch(clearCredits())
        }
    },[loading, dispatch]);

    if (loading || !props.casts) return null;

    return(
        <div className='netflix-slider'>
            <Swiper {...params}>
                {props.casts ? props.casts.map((cast) => (
                    <div key={cast.credit_id}>
                        <Card img={cast.profile_path}
                              name={cast.name}
                              character={cast.character ? cast.character : cast.job}
                        />
                    </div>
                ))
                :
                   ''
                }
            </Swiper>
        </div>
    )
}
