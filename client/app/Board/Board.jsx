import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import {Link} from 'react-router';
import FontIcon from 'material-ui/FontIcon';
import SwipeableViews from 'react-swipeable-views';
import ItemListContainer from '../ItemList/ItemListContainer';
import AddItemContainer from '../AddItem/AddItemContainer';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

let styles = {
    itemsSection: {
        padding: '2em',
        paddingTop: '10em',
        minHeight: '500px'
    },
    tabs: {
        paddingTop: '4.6em',
        position: 'fixed',
        width: '100%',
        zIndex: 1,
        boxShadow: 'rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px'
    },
    addNewButton: {
        position: 'fixed',
        bottom: '1.8em',
        right: '1.8em'
    },
    swipeableContainer: {
        // height: window.innerHeight
    }
};

export default class Board extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            'slideIndex': 0
        };
    }

    handleChange(value) {
        this.setState({slideIndex: value});
    }

    // componentDidMount() {
    //     window.addEventListener('resize', () => {
    //         console.log('force updating');
    //         styles.swipeableContainer.height = window.innerHeight;
    //         this.forceUpdate();
    //     });
    // }

    render() {
        return (
            <div>
                <Tabs onChange={this.handleChange.bind(this)} value={this.state.slideIndex} style={styles.tabs}>
                    <Tab icon={(
                        <FontIcon className="material-icons">add</FontIcon>
                    )} value={0}/>
                    <Tab icon={(
                        <FontIcon className="material-icons">change_history</FontIcon>
                    )} value={1}/>
                    <Tab icon={(
                        <FontIcon className="material-icons">playlist_add_check</FontIcon>
                    )} value={2}/>
                </Tabs>
                <SwipeableViews animateHeight={true} index={this.state.slideIndex} containerStyle={styles.swipeableContainer} onChangeIndex={this.handleChange.bind(this)}>
                    <section id="plus" key="plus" style={styles.itemsSection} className="col-md-6 col-md-offset-3">
                        {!!this.props.itemsByCategory["plus"] && <ItemListContainer items={this.props.itemsByCategory["plus"]}/>}
                    </section>
                    <section id="delta" key="delta" style={styles.itemsSection} className="col-md-6 col-md-offset-3">
                        {!!this.props.itemsByCategory["delta"] && <ItemListContainer items={this.props.itemsByCategory["delta"]}/>}
                    </section>
                    <section id="actions" key="actions" style={styles.itemsSection} className="col-md-6 col-md-offset-3">
                        {!!this.props.itemsByCategory["actions"] && <ItemListContainer items={this.props.itemsByCategory["actions"]}/>}
                    </section>
                </SwipeableViews>
                <Link to={`/board/${this.props.selectedBoard}/add`}>
                    <FloatingActionButton secondary={true} style={styles.addNewButton}>
                        <ContentAdd/>
                    </FloatingActionButton>
                </Link>
            </div>
        );
    }
}
