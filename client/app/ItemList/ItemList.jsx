import React, {PropTypes} from 'react';
import Item from '../Item/Item';
import FlatButton from 'material-ui/FlatButton';
import {
    Card,
    CardActions,
    CardHeader,
    CardMedia,
    CardTitle,
    CardText
} from 'material-ui/Card';

const styles = {
    card: {
        'marginBottom': '2em'
    }
};

const ItemList = ({items}) => {
    return (
        <div>
            {items.map(item => <div className="row" key={item.id}>
                <Card style={styles.card}>
                    <CardHeader title="Δ" subtitle={item.content} avatar="http://www.material-ui.com/images/jsa-128.jpg"/>
                    <CardActions>
                        <FlatButton label="Delete"/>
                        <FlatButton label="Edit"/>
                    </CardActions>
                </Card>
            </div>)}
        </div>
    );
};

ItemList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.string.isRequired, content: PropTypes.string.isRequired}).isRequired).isRequired
};

export default ItemList;
