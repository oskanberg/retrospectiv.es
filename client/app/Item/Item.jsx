import React, {PropTypes} from 'react';

const Item = ({content}) => (
    <li>{content}</li>
);

Item.propTypes = {
    content: PropTypes.string.isRequired
};

export default Item;
