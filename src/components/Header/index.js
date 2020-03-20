import React from 'react';
import {
    Link
} from "react-router-dom";
import {createUseStyles} from 'react-jss'
import styles from './../../assets/jss/components/headerStyles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import headerLinks from "../../config/headerLinks";

const useStyles = createUseStyles(styles);

export default function Header(props) {

    const classes = useStyles();


    return (
        <div className={classes.headerContainer}>

            <div className={classes.logoContainer}  data-aos='fade-in'>
                <button className={classes.hamburgerIcon} onClick={() => props.toggleNavDrawer()}>
                    <FontAwesomeIcon icon="bars" />
                </button>
                <Link className={classes.logo} to={'/'}>
                    <img src="http://placehold.it/150x50?text=Logo" alt=""/>
                </Link>
            </div>

            <div className={classes.navContainer}>
                <ul>
                    {
                        headerLinks.map((item) => {
                            return (
                                <li key={item.title}>
                                    <Link to={ item.url }>{ item.title } </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    );
}

