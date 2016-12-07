import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import {addBoardItem} from '../actions';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class AddItem extends React.Component {

    constructor(props) {
        super(props);
        this.selectedBoard = props.selectedBoard;
        this.dispatch = props.dispatch;
        this.state = {
            value: '',
            category: ''
        };

        this.styles = {
            inputArea: {
                'marginBottom': '2em',
                'marginTop': '2em'
            }
        };
    }

    handleItemChange(event) {
        this.setState({value: event.target.value, category: this.state.category});
    }

    handleCategoryChange(event) {
        this.setState({value: this.state.value, category: event.target.value});
    }

    handleClick() {
        const value = this.state.value;
        const category = this.state.category;

        if (!value.trim() || !category.trim()) {
            return;
        }

        this.dispatch(addBoardItem(this.selectedBoard, {
            content: value,
            category: category,
            id: ""
        }));

        this.state.value = '';
    }

    render() {
        return (
            <div className="row" style={this.styles.inputArea}>
                <div className="col-md-10">
                    <TextField value={this.state.value} hintText="Add an item" multiLine={true} fullWidth={true} onChange={this.handleItemChange.bind(this)}/>
                    <TextField value={this.state.category} hintText="Category" multiLine={false} fullWidth={true} onChange={this.handleCategoryChange.bind(this)}/>
                </div>
                <div className="col-md-2">
                    <RaisedButton label="Add" onClick={this.handleClick.bind(this)} primary={true}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {selectedBoard: state.selectedBoard};
};

const cAddItem = connect(mapStateToProps)(AddItem);
export default cAddItem;
