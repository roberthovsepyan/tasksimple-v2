import {combineReducers} from 'redux';
import cardReducer from './cards';
import itemsReducer from './items';
import {reducer as formReducer} from 'redux-form';

export const allReducers=combineReducers({
    cards: cardReducer,
    items: itemsReducer,
    form: formReducer
});