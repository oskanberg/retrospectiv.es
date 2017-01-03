import React from 'react';
import ItemListContainer from '../ItemList/ItemListContainer';
import AddItem from '../AddItem/AddItemContainer';
import BoardContainer from '../Board/BoardContainer';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

const App = ({params: {
        boardId
    }, children}) => {

    return (
        <MuiThemeProvider>
            <div>
                <AppBar title="retrospectiv.es" zDepth={0}/>
                {children}
            </div>
        </MuiThemeProvider>
    );
};

export default App;
