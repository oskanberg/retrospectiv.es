import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {Route, Router, IndexRoute, hashHistory, browserHistory} from 'react-router';
import {syncHistoryWithStore, routerMiddleware} from 'react-router-redux';

import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

import {createStore, applyMiddleware} from 'redux';
import {selectBoard, invalidateBoard, updateBoard, addBoardItem} from './actions';
import rootReducer from './reducers';
import App from './App/App';

import BoardContainer from './Board/BoardContainer';
import NewBoard from './NewBoard/NewBoard';

import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const loggerMiddleware = createLogger();
const newRouterMiddleware = routerMiddleware(browserHistory);
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, loggerMiddleware, newRouterMiddleware));
const history = syncHistoryWithStore(browserHistory, store);

render(
    <Provider store={store}>
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={NewBoard}/>
            <Route path="/board/:boardId" component={BoardContainer}/>
            <Route path="/new" component={NewBoard}/>
        </Route>
    </Router>
</Provider>, document.getElementById('root'));
