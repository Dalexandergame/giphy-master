import { SHOW_GIPHY_DISPLAY, HIDE_GIPHY_DISPLAY } from "../actions/giphy-diplay";

const initialState = {
    isShown: false,
    giphy: null
};

export default (state, action) => {
    if(state === undefined) {
        return initialState;
    }
    switch (action.type) {
        case SHOW_GIPHY_DISPLAY:
            return {
                ...state,
                isShown: true,
                giphy: action.giphy
            }
        case HIDE_GIPHY_DISPLAY:
            return {
                ...state,
                isShown: false
            }
        default: 
            return state;       
    }
}