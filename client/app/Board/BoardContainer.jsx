import React from 'react';
import {connect} from 'react-redux';
import MobileBoard from './MobileBoard';
import DesktopBoard from './DesktopBoard';
import {selectBoard, updateBoard} from '../actions';
import MediaQuery from 'react-responsive';

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
        document.title = "retrospectiv.es";
    }

    render() {
        return <MediaQuery minWidth={1024}>
            {(matches) => {
                if (matches) {
                    return <DesktopBoard itemsByCategory={this.props.itemsByCategory} selectedBoard={this.props.id}></DesktopBoard>;
                }
                if (!matches) {
                    return <MobileBoard itemsByCategory={this.props.itemsByCategory} selectedBoard={this.props.id}></MobileBoard>;
                }
            }}
        </MediaQuery>;
    }
}

const mapStateToProps = (state, ownProps) => {
    const {boards} = state;
    const board = boards[ownProps.params.boardId] || [];
    console.log(board.title);
    const boardItems = board.items || [];
    const boardTitle = board.title || "retrospectiv.es";
    document.title = boardTitle;

    let itemsByCategory = {};
    for (let item of boardItems) {
        itemsByCategory[item.category] = itemsByCategory[item.category] || [];
        itemsByCategory[item.category].push(item);
    }

    return {id: ownProps.params.boardId, boardTitle, itemsByCategory};
};

export default connect(mapStateToProps)(BoardContainer);
