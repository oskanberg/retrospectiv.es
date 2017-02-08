import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar';
import NavigationBack from 'material-ui/svg-icons/navigation/arrow-back';
import {Link} from 'react-router';

import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';

import categories from '../categories';

const styles = {
    inputArea: {
        position: 'fixed',
        marginTop: '1em'
    },
    textAreaContainer: {
        // paddingLeft: '5em',
        // paddingRight: '5em'
        marginTop: '1tem'
    },
    categorySelect: {
        backgroundColor: 'none'
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
            selectedIndex: this.categoryIdToIndex(this.props.selectedCategory)
        };
    }

    indexToCategory(index) {}

    categoryIdToIndex(categoryId) {
        let filtered = categories.map((category, index) => {
            return {index, category};
        }).filter(cat => cat.category.id === categoryId);

        if (filtered.length !== 1) {
            throw new Error('No definition for this category!');
        }

        return filtered[0].index;
    }

    handleItemChange(event) {
        this.setState({value: event.target.value, category: this.state.category});
    }

    handleCategoryChange(event) {
        this.setState({value: this.state.value, category: event.target.value});
    }

    addItem() {
        const value = this.state.value;
        const category = categories[this.state.selectedIndex].id;

        if (!value.trim() || !category.trim()) {
            return;
        }

        this.props.onAddItem(value, category);
    }

    select(index) {
        this.setState({selectedIndex: index});
    }

    render() {
        return (
            <div>
                <AppBar title={"Add New Item"} iconElementLeft={(
                    <IconButton onClick={this.props.onViewClose}><NavigationBack/></IconButton>
                )} iconElementRight={(<FlatButton label="Save" onClick={this.addItem.bind(this)}/>)}></AppBar>

                <div className="col-xs-12 col-md-4 col-md-offset-4" style={styles.inputArea}>
                    <BottomNavigation selectedIndex={this.state.selectedIndex} style={styles.categorySelect}>
                        {categories.map((category, index) => {
                            return (<BottomNavigationItem key={category.id} label={category.id} icon={(
                                <FontIcon className="material-icons">{category.icon}</FontIcon>
                            )} onTouchTap={() => this.select(index)}/>);
                        })}
                    </BottomNavigation>
                    <div style={styles.textAreaContainer}>
                        <TextField value={this.state.value} multiLine={true} rows={3} floatingLabelText="Enter Item Text" multiLine={true} fullWidth={true} onChange={this.handleItemChange.bind(this)} autoFocus/>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddItem;
