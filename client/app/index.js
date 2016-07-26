import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import {Route} from 'react-router';

import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'

import { createStore, applyMiddleware } from 'redux'
import { selectBoard, invalidateBoard, updateBoard, addBoardItem } from './actions'
import rootReducer from './reducers'
import App from './components/App'

const loggerMiddleware = createLogger()
const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
)

const routes = <Route component={App}>
    <Route path="/:boardId" component={App} />
</Route>;

store.dispatch(updateBoard('abc'))
store.dispatch(addBoardItem('abc', {
	"content": "hello",
	"category": "test",
	"id": ""
}))
store.dispatch(updateBoard('abc'))

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)
