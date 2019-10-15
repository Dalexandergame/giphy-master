import { connect } from 'react-redux';
import Random from './random';
import { showGiphyDisplay } from '../../../actions/giphy-diplay';
import { getRandomGiphy } from '../../../actions/random';


function mapStateToProps (state) {
    return {
        giphy: state.random.giphy
    };
}

function mapDispatchToProps (dispatch) {
    return {
        thumbnailClicked: (giphy) => dispatch(showGiphyDisplay(giphy)),
        getRandomGiphy: () => dispatch(getRandomGiphy())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Random);