import React, {PropTypes} from 'react';
import ItemListContainer from '../ItemList/ItemListContainer';

const styles = {
    card: {
        'marginBottom': '2em'
    }
};

const Categories = ({itemsByCategory}) => {
    return (
        <section id="categories">
            {Object.keys(itemsByCategory).map((category) => {
                return (
                    <section id="category" key={category}>
                        <h1>{category}</h1>
                        <ItemListContainer items={itemsByCategory[category]}/>
                    </section>
                );
            })}
        </section>
    );
};

Categories.propTypes = {
    itemsByCategory: PropTypes.object.isRequired
};

export default Categories;
