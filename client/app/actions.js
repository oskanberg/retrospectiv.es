import fetch from 'isomorphic-fetch'

/*
 * action types
 */

export const SELECT_BOARD = 'SELECT_BOARD'
export const INVALIDATE_BOARD = 'INVALIDATE_BOARD'

export const REQUEST_BOARD_UPDATE = 'REQUEST_BOARD_UPDATE'
export const RECEIVE_BOARD_UPDATE = 'RECEIVE_BOARD_UPDATE'

export const REQUEST_BOARD_ITEM_ADD = 'REQUEST_BOARD_ITEM_ADD'
export const BOARD_ITEM_ADD_ERROR = 'BOARD_ITEM_ADD_ERROR'

/*
 * action creators
 */

export function selectBoard(boardId) {
    return { type: SELECT_BOARD, boardId }
}

export function invalidateBoard(boardId) {
    return { type: INVALIDATE_BOARD, boardId }
}

export function addBoardItem(boardId, item) {
    return dispatch => {
        dispatch(requestBoardItemAdd(boardId, item))
        return fetch(`http://localhost:1123/api/boards/${boardId}/items`, {
                method: "POST",
                body: JSON.stringify(item)
            })
            .then(response => dispatch(updateBoard(boardId)))
            .catch(response => dispatch(boardItemAddError(boardId, response)))
    }
}

export function updateBoard(boardId) {
    return dispatch => {
        dispatch(requestBoardUpdate(boardId))
        return fetch(`http://localhost:1123/api/boards/${boardId}`)
            .then(response => response.json())
            .then(json => dispatch(receiveBoardUpdate(boardId, json)))
    }
}

function requestBoardItemAdd(boardId, item) {
    return { type: REQUEST_BOARD_ITEM_ADD, boardId, boardId, item }
}

function boardItemAddError(boardId, error) {
    return { type: BOARD_ITEM_ADD_ERROR, boardId, error }
}

function requestBoardUpdate(boardId) {
    return { type: REQUEST_BOARD_UPDATE, boardId }
}

function receiveBoardUpdate(boardId, json) {
    return {
        type: RECEIVE_BOARD_UPDATE,
        boardId,
        items: json.items,
        receivedAt: Date.now()
    }
}
