import React from 'react';
import AddItem from '../AddItem/AddItemContainer';
import CategoriesContainer from '../Categories/CategoriesContainer';

const Board = () => {
    return (
        <div>
            <AddItem/>
            <CategoriesContainer/>
        </div>
    );
};

export default Board;
