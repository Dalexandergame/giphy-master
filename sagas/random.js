import axios from 'axios';
import { put, call } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga/effects';
import { GET_RANDOM_GIPHY, getRandomGiphySuccess, getRandomGiphyError } from '../actions/random';

const apiKey = 'f2EWVlI79WsYU5ySkv94XIMxO1ljh7iH';

function* getRandomGiphy() {

    try {
        const randomGiphyResult = yield call(
            axios.get,
            'https://api.giphy.com/v1/gifs/random',
            {
                params: {
                    apiKey
                }
            }
        );
        yield put(getRandomGiphySuccess(randomGiphyResult.data.data));
    } catch (e) {
        yield put(getRandomGiphyError());
    }
}

export default function* () {
    yield takeLatest(GET_RANDOM_GIPHY, getRandomGiphy);
}