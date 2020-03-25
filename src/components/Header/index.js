import React from 'react';
import {
    Link
} from "react-router-dom";
import {createUseStyles} from 'react-jss'
import styles from './../../assets/jss/components/headerStyles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import headerLinks from "../../config/headerLinks";
import HorizontalLinks from './../HorizontalLinks';
import classNames from "classnames";

const useStyles = createUseStyles(styles);

export default function Header(props) {

    const classes = useStyles();
    const container = classNames({
        [classes.headerContainer]: true,
        ["container"]: true,
    });
    return (
        <div id="navHeader" className={container}>
            <div className={classes.logoContainer}  data-aos='fade-in'>
                <button className={classes.hamburgerIcon} onClick={() => props.toggleNavDrawer()}>
                    <FontAwesomeIcon icon="bars" />
                </button>
                <Link className={classes.logo} to={'/'}>
                    <img src="http://placehold.it/150x50?text=Logo" alt=""/>
                </Link>
            </div>

            <HorizontalLinks links={headerLinks}/>
        </div>
    );
}

