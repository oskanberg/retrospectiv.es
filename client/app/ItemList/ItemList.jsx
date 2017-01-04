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

const getDeterministicRandom = (i) => {
    return i % 12345;
};

const ItemList = ({items}) => {
    return (
        <div>
            {items.map((item, index) => <div key={item.id}>
                <Card style={styles.card}>
                    <CardHeader avatar={`https://api.adorable.io/avatars/50/${getDeterministicRandom(index)}`}/>
                    <CardText>
                        {item.content}
                    </CardText>
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
