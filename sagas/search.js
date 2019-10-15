import axios from 'axios';
import { put, call, select } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga/effects';
import { PERFORM_SEARCH, searchSuccess, searchError } from "../actions/search";

const apiKey = 'f2EWVlI79WsYU5ySkv94XIMxO1ljh7iH';

const selectSearchState = (state) => state.search;

function* doSearch() {
    const { currentOffset, searchTerm } = yield select(selectSearchState);
    const params = {
        apiKey,
        q: searchTerm,
        limit: 50,
        offset: currentOffset
    }

    let endpoint;

    if (searchTerm === undefined) {
        endpoint = 'trending'
    }else{
        endpoint = 'search'
        params.q = searchTerm
    }

    try {
        const searchResults = yield call(
            axios.get,
            `https://api.giphy.com/v1/gifs/${endpoint}`,
            {
                params,
            }
        );
        yield put(searchSuccess(searchResults.data.data));
    } catch (e) {
        yield put(searchError());
    }
}

export default function* () {
    yield takeLatest(PERFORM_SEARCH, doSearch);
}