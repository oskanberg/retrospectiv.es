import React from 'react';
import AddItem from '../AddItem/AddItemContainer';
import CategoriesContainer from '../Categories/CategoriesContainer';
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
        return <Board></Board>;
    }
}

const mapStateToProps = (state, ownProps) => {
    return {id: ownProps.params.boardId};
};

export default connect(mapStateToProps)(BoardContainer);
