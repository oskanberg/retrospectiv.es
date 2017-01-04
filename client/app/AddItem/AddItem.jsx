import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import {Link} from 'react-router';

const styles = {
    inputArea: {
        position: 'fixed',
        marginTop: '7em'
    },
    addButton: {
        float: 'right'
    },
    closeButton: {
        marginTop: '50px',
        marginRight: '50px',
        float: 'right'
    }
};

class AddItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            category: ''
        };
    }

    handleItemChange(event) {
        this.setState({value: event.target.value, category: this.state.category});
    }

    handleCategoryChange(event) {
        this.setState({value: this.state.value, category: event.target.value});
    }

    addItem() {
        const value = this.state.value;
        const category = this.state.category;

        if (!value.trim() || !category.trim()) {
            return;
        }

        this.props.onAddItem(value, category);
    }

    render() {
        return (
            <div>
                <AppBar title={"Add New Item"} iconElementLeft={(
                    <IconButton onClick={this.props.onViewClose}><NavigationClose/></IconButton>
                )} iconElementRight={(<FlatButton label="Add" onClick={this.addItem.bind(this)}/>)}></AppBar>

                <div className="col-xs-12 col-md-6 col-md-offset-3" style={styles.inputArea}>
                    <TextField value={this.state.value} hintText="Add an item" multiLine={true} fullWidth={true} onChange={this.handleItemChange.bind(this)}/>
                    <TextField value={this.state.category} hintText="Category" multiLine={false} fullWidth={true} onChange={this.handleCategoryChange.bind(this)}/>
                </div>
            </div>
        );
    }
}

export default AddItem;
