import React, { PropTypes } from 'react'
import Item from './Item'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const styles = {
  card: {
    'marginBottom': '2em'
  }
}

const ItemList = ({ items }) => (
  <div>
    {items.map(item =>
      <div className="row">
        <Card key={item.id} style={styles.card}>
          <CardHeader
            title="Δ"
            subtitle={item.content}
            // avatar="http://www.material-ui.com/images/jsa-128.jpg"
          />
          <CardActions>
            <FlatButton label="Action1" />
            <FlatButton label="Action2" />
          </CardActions>
        </Card>
      </div>
    )}
  </div>
)

ItemList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
  }).isRequired).isRequired,
}

export default ItemList
