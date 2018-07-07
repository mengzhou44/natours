import { combineReducers } from 'redux';

import { reducer as formReducer } from 'redux-form';
import popupReducer from './popup-reducer';

export default combineReducers({
    form: formReducer,
    popup: popupReducer
});
