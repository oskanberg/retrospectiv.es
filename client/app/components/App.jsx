import React from 'react'
import VisibleItemList from '../containers/VisibleItemList'
import AddItem from '../containers/AddItem'

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
)

export default App
