import React from 'react';
import {createUseStyles} from 'react-jss'
import styles from './../../assets/jss/components/carouselStyles'
import Slider from "react-slick";

const useStyles = createUseStyles(styles);

export default function Carousel(props) {

    const classes = useStyles();

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
    };

    return (
        <div className={classes.carouselContainer}>
            <Slider {...settings}>
                {
                    props.images.map((image) => {
                        return (
                            <div>
                                <img src={image.uri} />
                            </div>
                        )
                    })
                }
            </Slider>
        </div>
    );
}

