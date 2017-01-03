import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import SwipeableViews from 'react-swipeable-views';
import ItemListContainer from '../ItemList/ItemListContainer';
import AddItemContainer from '../AddItem/AddItemContainer';

const styles = {
    itemsSection: {
        padding: '2em'
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

    render() {
        return (
            <div>
                <Tabs onChange={this.handleChange.bind(this)} value={this.state.slideIndex}>
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
                <SwipeableViews index={this.state.slideIndex} onChangeIndex={this.handleChange.bind(this)}>
                    <section id="plus" key="plus" style={styles.itemsSection} className="col-md-6 col-md-offset-3">
                        {!!this.props.itemsByCategory["plus"] && <ItemListContainer items={this.props.itemsByCategory["plus"]}/>}
                    </section>
                    <section id="delta" key="delta" className="col-md-6 col-md-offset-3">
                        {!!this.props.itemsByCategory["delta"] && <ItemListContainer items={this.props.itemsByCategory["delta"]}/>}
                    </section>
                    <section id="actions" key="actions" className="col-md-6 col-md-offset-3">
                        {!!this.props.itemsByCategory["actions"] && <ItemListContainer items={this.props.itemsByCategory["actions"]}/>}
                    </section>
                </SwipeableViews>
            </div>
        );
    }
}
