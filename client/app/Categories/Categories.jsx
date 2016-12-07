import React, {PropTypes} from 'react';
import ItemListContainer from '../ItemList/ItemListContainer';

const styles = {
    categoryHeader: {
        'marginBottom': '1em'
    }
};

const Categories = ({itemsByCategory}) => {
    return (
        <section id="categories" className="row">
            {Object.keys(itemsByCategory).map((category) => {
                return (
                    <section id="category" key={category} className="col-md-6">
                        <h1 style={styles.categoryHeader}>{category}</h1>
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
