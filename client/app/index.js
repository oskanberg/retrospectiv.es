import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Route, Router, hashHistory } from 'react-router'

import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'

import { createStore, applyMiddleware } from 'redux'
import { selectBoard, invalidateBoard, updateBoard, addBoardItem } from './actions'
import rootReducer from './reducers'
import App from './components/App'

import injectTapEventPlugin from 'react-tap-event-plugin';

const loggerMiddleware = createLogger()
const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
)

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()

// store.dispatch(updateBoard('abc'))
// store.dispatch(addBoardItem('abc', {
// 	"content": "hello",
// 	"category": "test",
// 	"id": ""
// }))
// store.dispatch(updateBoard('abc'))

render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/:boardId" component={App} />
        </Router>
    </Provider>,
    document.getElementById('root')
)
