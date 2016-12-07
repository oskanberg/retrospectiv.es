import React from 'react';
import AddItemContainer from '../AddItem/AddItemContainer';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {connect} from 'react-redux';
import {createNewBoard} from '../actions';

class NewBoard extends React.Component {

    constructor(props) {
        console.log(props);
        super(props);
        this.dispatch = props.dispatch;

        this.styles = {
            inputArea: {
                'marginBottom': '2em',
                'marginTop': '2em'
            },
            buttonArea: {
                'width': '100%',
                'display': 'inline-block',
                'overflow': 'auto',
                'whiteSpace': 'nowrap',
                'margin': '0px auto'
            },
            button: {
                'float': 'right'
            }
        };

        this.state = {
            name: ''
        };

    }

    updateNameInput(e) {
        this.setState({name: e.target.value});
    }

    addNewBoard(e) {
        this.dispatch(createNewBoard(this.state.name));
    }

    render() {
        return (
            <div>
                <div className="row" style={this.styles.inputArea}>
                    <div className="col-md-8 col-md-offset-2">
                        <TextField value={this.state.name} hintText="Board name" multiLine={true} fullWidth={true} onChange={this.updateNameInput.bind(this)}/>
                    </div>
                </div>
                <div className="row" style={this.styles.buttonArea}>
                    <div className="col-md-8 col-md-offset-2">
                        <RaisedButton label="Add New Board" onClick={this.addNewBoard.bind(this)} style={this.styles.button} primary={true}/>
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {};
};

export default connect(mapStateToProps)(NewBoard);
