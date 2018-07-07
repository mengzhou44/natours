import * as types from '../actions/types';

export default (state = { visible: false }, action) => {
    switch (action.type) {
        case types.SHOW_POPUP:
            return { visible: true }
        case types.HIDE_POPUP:
            return { visible: false }

        default:
            return state;
    }
}