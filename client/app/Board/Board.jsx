import React from 'react';
import AddItem from '../AddItem/AddItemContainer';
import CategoriesContainer from '../Categories/CategoriesContainer';

const App = ({params: {
        boardId
    }}) => {

    return (
        <div>
            <AddItem/>
            <CategoriesContainer/>
        </div>
    );
};

export default App;
