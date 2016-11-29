import React from 'react';
import VisibleItemList from '../ItemList/ItemListContainer';
import AddItem from '../AddItem/AddItemContainer';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

const App = ({params: {
        locationId
    }, location: {
        query
    }}) => (
    <MuiThemeProvider>
        <div>
            <AppBar title="retrospectiv.es"/>
            <div className="container">
                <AddItem/>
                <VisibleItemList/>
            </div>
        </div>
    </MuiThemeProvider>
);

export default App;
