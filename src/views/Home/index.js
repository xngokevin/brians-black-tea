import React, { Component } from 'react';
import styles from "../../assets/jss/views/Home/homeStyles";
import {createUseStyles} from "react-jss";
import Carousel from "../../components/Carousel";
import GalleryGrid from "../../components/GalleryGrid";

const carouselImages = [
    {
        uri: require("./../../assets/images/hero.jpg"),
        link: ""
    },
    {
        uri: "http://placehold.it/900x400?text=2",
        link: ""
    },
    {
        uri: "http://placehold.it/900x400?text=3",
        link: ""
    }
];

export default function Home() {
    const useStyles = createUseStyles(styles);
    const classes = useStyles();

    return (
        <div className={"contentContainer"}>
            <Carousel images={carouselImages}/>
            <GalleryGrid/>
        </div>

    );
}

