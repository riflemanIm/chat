import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { createBrowserHistory as createHistory } from 'history';
import {connectRouter} from "connected-react-router";
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import rootEpic from './epics';

export const history = createHistory();
const epicMiddleware = createEpicMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line
const middleware = [epicMiddleware, thunk];


export const store = createStore(
    combineReducers({
        ...rootReducer,
        router: connectRouter(history)
    }),
    composeEnhancers(
        applyMiddleware(...middleware),
    ),
);

epicMiddleware.run(rootEpic);
