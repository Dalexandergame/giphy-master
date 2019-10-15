import React from 'react';
import PropTypes from 'prop-types';
import * as CustomTypes from '../../lib/custom-types';

export default function SearchResult ({ result, onClick }) {
    const { thumbnail } = result;
    const clicked = (e) => {
        e.preventDefault();
        onClick();
    }

    return (
        <a href="#">
            <img onClick={clicked} src={thumbnail} />
        </a>
    );

}

SearchResult.propTypes = {
    result: CustomTypes.SearchResult.isRequired,
    onClick: PropTypes.func.isRequired
};