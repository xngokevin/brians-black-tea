import React from 'react';
import {createUseStyles} from 'react-jss'
import styles from './../../assets/jss/components/galleryStyles'
import Slider from "react-slick";
import Gallery from "react-photo-gallery";

const useStyles = createUseStyles(styles);

const photos = [
    {
        src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
        width: 1,
        height: 1
    },
    {
        src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
        width: 1,
        height: 1
    },
    {
        src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
        width: 1,
        height: 1
    },
    {
        src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
        width: 1,
        height: 1
    },
    {
        src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
        width: 1,
        height: 1
    },
    {
        src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
        width: 1,
        height: 1
    },
    {
        src: "https://source.unsplash.com/zh7GEuORbUw/600x799",
        width: 1,
        height: 1
    },
    {
        src: "https://source.unsplash.com/PpOHJezOalU/800x599",
        width: 1,
        height: 1
    },
    {
        src: "https://source.unsplash.com/I1ASdgphUH4/800x599",
        width: 1,
        height: 1
    }
];

function columns(containerWidth) {
    let columns = 1;
    if (containerWidth >= 500) columns = 2;
    if (containerWidth >= 900) columns = 3;
    if (containerWidth >= 1500) columns = 4;
    return columns;
}

export default function GalleryGrid(props) {

    const classes = useStyles();

    return (
        <div className={classes.container} data-aos='fade-down'>
            <Gallery photos={photos} direction="column" columns={columns} />
        </div>
    );
}

