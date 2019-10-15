import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Navigation from './navigation';
import { withRouter } from 'react-router-dom';

const pages = [
    {   path: '/', 
        title: 'Search' 
    },
    {
        path: '/trending',
        title: 'Trending'
    },
    {
        path: '/random',
        title: 'Random'
    }
];

function mapStateToProps () {
    return { 
        pages,
        currentPath: location.pathname
    };
}

function mapDispatchToProps (dispatch) {
    return {
        navigate: (path) => dispatch(push(path))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navigation));