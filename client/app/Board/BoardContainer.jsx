import React from 'react';
import {connect} from 'react-redux';
import Board from './Board';
import {selectBoard, updateBoard} from '../actions';

const UPDATE_INTERVAL_MS = 7500;

class BoardContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.dispatch(updateBoard(this.props.id));
        this.props.dispatch(selectBoard(this.props.id));
    }

    componentDidMount() {
        let intervalId = setInterval(() => {
            this.props.dispatch(updateBoard(this.props.id));
        }, UPDATE_INTERVAL_MS);
        this.setState({intervalId: intervalId});
    }

    componentWillUnmount() {
        clearInterval(this.state.intervalId);
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
