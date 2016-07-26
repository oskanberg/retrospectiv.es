import React, { PropTypes } from 'react'
import Item from './Item'

const ItemList = ({ items }) => (
  <ul>
    {items.map(item =>
      <Item
        key={item.id}
        {...item}
      />
    )}
  </ul>
)

ItemList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
  }).isRequired).isRequired,
}

export default ItemList