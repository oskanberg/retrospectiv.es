import React from 'react';
import {connect} from 'react-redux';
import {createNewBoard} from '../actions';
import AddItemContainer from '../AddItem/AddItemContainer';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

class NewBoard extends React.Component {

    constructor(props) {
        super(props);
        this.dispatch = props.dispatch;

        this.styles = {
            inputArea: {
                'marginBottom': '2em',
                'marginTop': '7em',
                'padding': '1em'
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
            name: '',
            modalOpen: false
        };
    }

    handleClose() {
        this.setState({modalOpen: false});
    }

    updateNameInput(e) {
        this.setState(Object.assign(this.state, {name: e.target.value}));
    }

    confirmNewBoard(e) {
        this.setState(Object.assign(this.state, {modalOpen: true}));
        e.preventDefault();
    }

    addNewBoard() {
        this.setState(Object.assign(this.state, {modalOpen: false}));
        this.dispatch(createNewBoard(this.state.name));
    }

    render() {
        const actions = [(<FlatButton label="Cancel" primary={true} onTouchTap={this.handleClose.bind(this)}/>), (<FlatButton label="I understand" primary={true} keyboardFocused={true} onTouchTap={this.addNewBoard.bind(this)}/>)];

        return (
            <div>
                <Dialog title="Warning!" actions={actions} modal={false} open={this.state.modalOpen} onRequestClose={this.handleClose.bind(this)}>
                    This application is in active development. Your boards may be removed without notice!
                </Dialog>
                <form onSubmit={this.confirmNewBoard.bind(this)}>
                    <div className="row" style={this.styles.inputArea}>
                        <div className="col-xs-12 col-md-6 col-md-offset-3">
                            <TextField value={this.state.name} floatingLabelText="Enter Board Name" multiLine={false} fullWidth={true} onChange={this.updateNameInput.bind(this)} autoFocus/>
                            <RaisedButton type="submit" label="Add New Board" style={this.styles.button} primary={true}/>
                        </div>
                    </div>
                </form>
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {};
};

export default connect(mapStateToProps)(NewBoard);
