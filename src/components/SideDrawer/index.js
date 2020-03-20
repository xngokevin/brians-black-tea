import React from 'react';
import {createUseStyles} from 'react-jss'
import classNames from "classnames";
import styles from './../../assets/jss/components/sideDrawerStyles'
import headerLinks from "../../config/headerLinks";
import {Link} from "react-router-dom";

const useStyles = createUseStyles(styles);

export default function SideDrawer(props) {

    const classes = useStyles();

    const sideDrawerClasses = classNames({
        [classes.sideDrawerContainer]: true,
        [classes.open]: props.show,
    });

    return (
        <div className={sideDrawerClasses}>
            <div className={classes.navContainer}>
                <ul>
                    {
                        headerLinks.map((item) => {
                            return (
                                <li>
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
