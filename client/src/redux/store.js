import {createStore,applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './index'
import {composeWithDevTools} from 'redux-devtools-extension'


export default createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));