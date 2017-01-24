import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import {Link} from 'react-router';
import FontIcon from 'material-ui/FontIcon';
import SwipeableViews from 'react-swipeable-views';
import ItemListContainer from '../ItemList/ItemListContainer';
import AddItemContainer from '../AddItem/AddItemContainer';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentCreate from 'material-ui/svg-icons/content/create';
import theme from '../theme';

const styles = {
    itemsSection: {
        // match the material ui padding
        padding: '16px',
        paddingTop: '6em',
        minHeight: window.innerHeight
    },
    tabHeading: {
        // match the material ui padding
        padding: '16px',
        paddingTop: 0,
        margin: 0,
        textAlign: 'center'
    },
    headingIcon: {
        fontSize: 35,
        color: theme.palette.sectionHeader
    },
    itemsWithoutBorder: {
        // match the material ui padding
        padding: '16px'
    },
    itemsWithBorder: {
        // match the material ui padding
        padding: '16px',
        borderRight: 'rgb(224, 224, 224) solid 1px',
        minHeight: window.innerHeight - 200
    },
    addNewButton: {
        position: 'fixed',
        bottom: '1.8em',
        right: '1.8em'
    }
};

const tabs = [
    {
        id: 'plus',
        title: 'Plusses',
        icon: 'add'
    }, {
        id: 'delta',
        title: 'Deltas',
        icon: 'change_history'
    }, {
        id: 'action',
        title: 'Actions',
        icon: 'playlist_add_check'
    }
];

export default class DesktopBoard extends React.Component {

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
            <div style={styles.itemsSection}>
                <div className="row">
                    {tabs.map((tab, i) => {
                        return (
                            <section id={tab.id} key={tab.id} className="col-sm-4" style={(i === tabs.length - 1)
                                ? styles.itemsWithoutBorder
                                : styles.itemsWithBorder}>
                                <h2 style={styles.tabHeading}>
                                    <FontIcon style={styles.headingIcon} className="material-icons">{tab.icon}</FontIcon>
                                </h2>
                                {!!this.props.itemsByCategory[tab.id] && <ItemListContainer items={this.props.itemsByCategory[tab.id]}/>}
                            </section>
                        );
                    })}
                </div>

                <Link to={`/board/${this.props.selectedBoard}/add/${tabs[this.state.slideIndex].id}`}>
                    <FloatingActionButton secondary={true} style={styles.addNewButton}>
                        <ContentCreate/>
                    </FloatingActionButton>
                </Link>
            </div>
        );
    }
}
