import {createStore,applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducer from '../Reducer/index'

const initialState={
    log:"dfsg"
};

const middleware=[thunk];

const store=createStore(rootReducer,initialState,composeWithDevTools(applyMiddleware(...middleware)))

export default store;