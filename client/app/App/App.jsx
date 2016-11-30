import React from 'react';
import ItemListContainer from '../ItemList/ItemListContainer';
import AddItem from '../AddItem/AddItemContainer';
import CategoriesContainer from '../Categories/CategoriesContainer';

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
                <CategoriesContainer/>
            </div>
        </div>
    </MuiThemeProvider>
);

export default App;
