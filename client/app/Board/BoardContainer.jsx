import React from 'react';
import {connect} from 'react-redux';
import Board from './Board';
import {selectBoard, updateBoard} from '../actions';

class BoardContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.dispatch(updateBoard(this.props.id));
        this.props.dispatch(selectBoard(this.props.id));
    }

    render() {
        return <Board itemsByCategory={this.props.itemsByCategory} selectedBoard={this.props.id}></Board>;
    }
}

const mapStateToProps = (state, ownProps) => {
    const {boards} = state;
    const board = boards[ownProps.params.boardId] || [];
    const boardItems = board.items || [];
    let itemsByCategory = {};
    for (let item of boardItems) {
        itemsByCategory[item.category] = itemsByCategory[item.category] || [];
        itemsByCategory[item.category].push(item);
    }
    return {id: ownProps.params.boardId, itemsByCategory: itemsByCategory};
};

export default connect(mapStateToProps)(BoardContainer);
