import React, {useEffect, useState} from 'react';
import Swiper from 'react-id-swiper';
import './Carousel.scss';
import {useDispatch} from "react-redux";
import Typography from '@material-ui/core/Typography';
import {fetchDetail} from "../../redux/actions/detail/fetchDetail";
import animateScrollTo from "animated-scroll-to";
import {fetchDetailSeries} from "../../redux/actions/detail/fetchDetailSeries";

export const Carousel = (props) => {
    const dispatch = useDispatch();
    const [loading, setLoading]=useState(false);

    useEffect(() => {
        return  () => {
            setLoading(true);
        }
    },[loading, dispatch]);

    const getDetail = (id, type, path) => {
        if (type === 'movie'){
            dispatch(fetchDetail(id, type, path))
            animateScrollTo(0,0)
        }
        if (type === 'tv'){
            dispatch(fetchDetailSeries(id, type, path))
            animateScrollTo(1600,0)
        }
    }

    if (loading) return null;

    const params = {
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 2,
                spaceBetween: 1
            },
            // when window width is >= 480px
            480: {
                slidesPerView: 3,
                spaceBetween: 1
            },
            // when window width is >= 630px
            700: {
                slidesPerView: 4,
                spaceBetween: 1,
            },
            // when window width is >= 850px
            850: {
                slidesPerView: 5,
                spaceBetween: 1,
            },
            // when window width is >= 1200px
            1100: {
                slidesPerView: 6,
                spaceBetween: 1,
            },
            // when window width is >= 1200px
            1300: {
                slidesPerView: 7,
                spaceBetween: 1,
            },
            // when window width is >= 1500px
            1500: {
                slidesPerView: 8,
                spaceBetween: 1,

            },
            // when window width is >= 1800px
            1700: {
                slidesPerView: 11,
                spaceBetween: 1
            },
            // when window width is >= 2100px
            2100: {
                slidesPerView: 11,
                spaceBetween: 1
            },
            // when window width is >= 2300px
            2300: {
                slidesPerView: 11,
                spaceBetween: 1
            },
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        slidesPerGroup: 2,
    }

    if (!props.data) return null;

    return(
        <div className='netflix-slider'>
            <Typography variant="h5" style={{ color: 'white'}}>
                {props.title}
            </Typography>
            <Swiper {...params}>
                {props.data.map((title) => (
                    title.poster_path ?
                        <div key={title.id}>
                            <img onClick={() => getDetail(title.id, props.category, props.path)} src={`http://image.tmdb.org/t/p/w154/${title.poster_path}`} alt=""/>
                        </div>
                        :
                        <div key={title.id}>
                            {/*<Link to={{pathname: `/tmdbapi/${props.path}/detail/${props.category}/${title.original_title}/${title.id}`, query: `/tmdbapi/${props.path}/detail`}}>*/}
                                <img src="https://www.randschemicals.com/wp-content/themes/randschemical/images/di.png" alt=""/>
                            {/*</Link>*/}
                        </div>
                ))}
            </Swiper>
        </div>
    )
}
