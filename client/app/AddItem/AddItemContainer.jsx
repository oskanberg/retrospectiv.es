import React from 'react';
import AddItem from './AddItem';
import {addBoardItem} from '../actions';
import {connect} from 'react-redux';

class AddItemContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const onAddItem = (value, category) => {
            this.props.dispatch(addBoardItem(this.props.selectedBoard, {
                content: value,
                category: category,
                id: ""
            }));
            this.props.router.push(`/board/${this.props.selectedBoard}`);
        };

        const onViewClose = () => {
            this.props.router.push(`/board/${this.props.selectedBoard}`);
        };

        return <AddItem selectedBoard={this.props.selectedBoard} selectedCategory={this.props.category} onAddItem={onAddItem.bind(this)} onViewClose={onViewClose.bind(this)}/>;
    }
    
}

const mapStateToProps = (state, ownProps) => {
    return {selectedBoard: ownProps.params.boardId, category: ownProps.params.category};
};

export default connect(mapStateToProps)(AddItemContainer);
