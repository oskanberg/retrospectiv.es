import React from 'react';
import {connect} from 'react-redux';
import Board from './Board';
import {selectBoard, updateBoard} from '../actions';

class BoardContainer extends React.Component {
    constructor(props) {
        super(props);

        this.dispatch = props.dispatch;
        this.id = props.id;
    }

    componentWillMount() {
        this.dispatch(updateBoard(this.id));
        this.dispatch(selectBoard(this.id));
    }

    render() {
        return <Board itemsByCategory={this.props.itemsByCategory}></Board>;
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
