import { combineReducers } from 'redux';
import auth from './auth';
import { reducer as formRducer } from 'redux-form';

export default combineReducers({
    auth,
    form: formRducer
})