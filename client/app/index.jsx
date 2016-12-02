import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

import {createStore, applyMiddleware} from 'redux';
import {selectBoard, invalidateBoard, updateBoard, addBoardItem} from './actions';
import rootReducer from './reducers';
import App from './App/App';

import Board from './Board/Board';
import NewBoard from './NewBoard/NewBoard';

import injectTapEventPlugin from 'react-tap-event-plugin';

const loggerMiddleware = createLogger();
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, loggerMiddleware));

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

render(
    <Provider store={store}>
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={NewBoard}/>
            <Route path="/board/:boardId" component={Board}/>
            <Route path="/new" component={NewBoard}/>
        </Route>
    </Router>
</Provider>, document.getElementById('root'));
