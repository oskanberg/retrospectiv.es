import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import {addBoardItem} from '../actions';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class AddItem extends React.Component {

    constructor(props) {
        super(props);
        this.dispatch = props.dispatch;
        this.state = {
            value: ''
        };

        this.styles = {
            inputArea: {
                'marginBottom': '2em',
                'marginTop': '2em'
            }
        };
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleClick() {
        let value = this.state.value;

        if (!value.trim()) {
            return;
        }

        this.dispatch(addBoardItem('abc', {
            content: value,
            category: "test",
            id: ""
        }));

        this.state.value = '';
    }

    render() {
        return (
            <div className="row" style={this.styles.inputArea}>
                <div className="col-md-10">
                    <TextField value={this.state.value} hintText="Add an item" multiLine={true} fullWidth={true} onChange={this.handleChange.bind(this)}/>
                </div>
                <div className="col-md-2">
                    <RaisedButton label="Add" onClick={this.handleClick.bind(this)} primary={true}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {};
};

const cAddItem = connect(mapStateToProps)(AddItem);
export default cAddItem;
