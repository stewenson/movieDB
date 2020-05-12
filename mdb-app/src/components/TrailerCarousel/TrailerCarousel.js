import React from "react";
import '../../styles/Iframe.scss';
import Swiper from "react-id-swiper";
/* Components */

export default function TrailerCarousel(props) {
    const params = {
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
                spaceBetween: 1
            },
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        slidesPerGroup: 2,
    }
    if (props.videos.results.length === 0) return <h3>No trailers</h3>;

    return (
        <Swiper {...params}>
            {props.videos.results ? Object.entries(props.videos.results)
                    .map(([key,video]) => (
                        <div key={video.id} className='iframe-container'>
                            <iframe
                                title="myFrame"
                                id="application_area"
                                key={video.id}
                                src={`http://www.youtube.com/embed/${video.key}`}
                                frameBorder="0"
                                allowFullScreen
                                allow="autoplay; encrypted-media"
                            />
                        </div>
                    ))
                :
                null
            }
        </Swiper>
    )
}