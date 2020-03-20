import React from 'react';
import {createUseStyles} from 'react-jss'
import styles from './../../assets/jss/components/backdropStyles'

const useStyles = createUseStyles(styles);

export default function Backdrop(props) {

    const classes = useStyles();

    if(!props.show) {
        return (
            <div/>
        );
    }
    return (
        <div className={classes.backdropContainer} onClick={() => props.toggleNavDrawer()}>

        </div>
    );
}

