import React from 'react';
import {createUseStyles} from 'react-jss'
import styles from './../../assets/jss/components/carouselStyles'
import Slider from "react-slick";

const useStyles = createUseStyles(styles);

export default function Carousel(props) {

    const classes = useStyles();

    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        adaptiveHeight: true
    };

    return (
        <div className={classes.carouselContainer}>
            <Slider {...settings}>
                {
                    props.images.map((image, index) => {
                        return (
                            <div key={`carousel-${index}`} data-aos='fade-down'>
                                <img src={image.uri} />
                            </div>
                        )
                    })
                }
            </Slider>
        </div>
    );
}

