import { combineReducers } from 'redux'
import {
    SELECT_BOARD,
    INVALIDATE_BOARD,
    REQUEST_BOARD_UPDATE,
    RECEIVE_BOARD_UPDATE,
} from './actions'

function selectedBoard(state = 'abc', action) {
    switch (action.type) {
        case SELECT_BOARD:
            return action.boardId
        default:
            return state
    }
}

function boards(state = {}, action) {
    switch (action.type) {
        case INVALIDATE_BOARD:
        case RECEIVE_BOARD_UPDATE:
        case REQUEST_BOARD_UPDATE:
            return Object.assign({}, state, {
                [action.boardId]: posts(state[action.boardId], action)
            })
        default:
            return state
    }
}

function posts(state = {
    isFetching: false,
    invalidated: false,
    items: []
}, action) {
    switch (action.type) {
        case INVALIDATE_BOARD:
            return Object.assign({}, state, {
                invalidated: true
            })
        case REQUEST_BOARD_UPDATE:
            return Object.assign({}, state, {
                isFetching: true,
                invalidated: false
            })
        case RECEIVE_BOARD_UPDATE:
            return Object.assign({}, state, {
                isFetching: false,
                invalidated: false,
                items: action.items,
                lastUpdated: action.receivedAt
            })
        default:
            return state
    }
}

const rootReducer = combineReducers({
    boards,
    selectedBoard
})

export default rootReducer
