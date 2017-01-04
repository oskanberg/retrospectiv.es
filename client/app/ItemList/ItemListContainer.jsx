import React from 'react';
import {connect} from 'react-redux';
import ItemList from './ItemList';
import {deleteBoardItem} from '../actions';

class ItemListContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    deleteItem(itemId) {
        this.props.dispatch(deleteBoardItem(this.props.id, itemId));
    }

    render() {
        return <ItemList items={this.props.items} onItemDelete={this.deleteItem.bind(this)}/>;
    }
}

const mapStateToProps = (state, ownProps) => {
    return {id: state.selectedBoard};
};

export default connect(mapStateToProps)(ItemListContainer);
