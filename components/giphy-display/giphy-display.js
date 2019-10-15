import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as CustomTypes from '../../lib/custom-types';
import styles from './giphy-display.css';

export default function GiphyDisplay ({ isShown, giphy, onClick}) {
    const containerClaasNames = classNames(
        styles.container,
        {[styles.isShown] : isShown}
    );

    return (
        <div className={containerClaasNames} onClick={onClick}>
            <img className={styles.image} src={giphy ? giphy.full : ''} />
        </div>
    )
}

GiphyDisplay.propTypes = {
    isShown: PropTypes.bool.isRequired,
    giphy: CustomTypes.SearchResult,
    onClick: PropTypes.func.isRequired
};