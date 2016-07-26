import React from 'react'
import { connect } from 'react-redux'
import { addBoardItem } from '../actions'

let AddTodo = ({ dispatch }) => {
    let input

    return (
        <button onClick={e =>
            dispatch(addBoardItem('abc', {
            "content": "hello",
            "category": "test",
            "id": ""
        }))
        }>Hello</button>
    )
}

AddTodo = connect()(AddTodo)

export default AddTodo
