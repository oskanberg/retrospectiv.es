import React from 'react';
import ItemListContainer from '../ItemList/ItemListContainer';
import BoardContainer from '../Board/BoardContainer';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

const App = ({params: {
        boardId
    }, children}) => {

    return (
        <MuiThemeProvider>
            <div>
                <AppBar title="retrospectiv.es" style={{position: 'fixed'}} zDepth={0}/>
                {children}
            </div>
        </MuiThemeProvider>
    );
};

export default App;
