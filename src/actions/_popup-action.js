import * as types from './types';
export function showPopup() {
    return { type: types.SHOW_POPUP };
}

export function hidePopup() {
    return { type: types.HIDE_POPUP };
}