import React from 'react';
import {
    Link
} from "react-router-dom";
import {createUseStyles} from 'react-jss'
import styles from './../../assets/jss/components/horizontalLinksStyles'

const useStyles = createUseStyles(styles);

export default function HorizontalLinks(props) {

    const classes = useStyles();

    return (
        <div className={classes.container}>
            <ul>
                {
                    props.links.map((item) => {
                        return (
                            <li key={item.title}>
                                <Link to={ item.url }>{ item.title } </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
}

