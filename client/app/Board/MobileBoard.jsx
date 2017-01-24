import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import {Link} from 'react-router';
import FontIcon from 'material-ui/FontIcon';
import SwipeableViews from 'react-swipeable-views';
import ItemListContainer from '../ItemList/ItemListContainer';
import AddItemContainer from '../AddItem/AddItemContainer';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentCreate from 'material-ui/svg-icons/content/create';

let styles = {
    itemsSection: {
        padding: '2em',
        paddingTop: '10em',
        minHeight: window.innerHeight
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

const tabs = [
    {
        id: 'plus',
        icon: 'add'
    }, {
        id: 'delta',
        icon: 'change_history'
    }, {
        id: 'action',
        icon: 'playlist_add_check'
    }
];

export default class MobileBoard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            'slideIndex': 0
        };
    }

    handleChange(value) {
        this.setState({slideIndex: value});
    }

    render() {
        return (
            <div>
                <Tabs onChange={this.handleChange.bind(this)} value={this.state.slideIndex} style={styles.tabs}>
                    {tabs.map((tab, i) => <Tab icon={(
                        <FontIcon className="material-icons">{tab.icon}</FontIcon>
                    )} value={i} key={tab.id}/>)}
                </Tabs>
                <SwipeableViews animateHeight={true} index={this.state.slideIndex} containerStyle={styles.swipeableContainer} onChangeIndex={this.handleChange.bind(this)}>
                    {tabs.map((tab, i) => <section id={tab.id} key={tab.id} style={styles.itemsSection} className="col-md-6 col-md-offset-3">
                        {!!this.props.itemsByCategory[tab.id] && <ItemListContainer items={this.props.itemsByCategory[tab.id]}/>}
                    </section>)}
                </SwipeableViews>
                <Link to={`/board/${this.props.selectedBoard}/add/${tabs[this.state.slideIndex].id}`}>
                    <FloatingActionButton secondary={true} style={styles.addNewButton}>
                        <ContentCreate />
                    </FloatingActionButton>
                </Link>
            </div>
        );
    }
}
