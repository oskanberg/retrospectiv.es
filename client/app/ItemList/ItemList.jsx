import React, {PropTypes} from 'react';
import IconButton from 'material-ui/IconButton';
import ActionDelete from 'material-ui/svg-icons/action/delete';
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

const ItemList = ({items, onItemDelete}) => {
    return (
        <div>
            {items.map((item, index) => <div key={item.id}>
                <Card style={styles.card}>
                    <CardHeader avatar={`https://api.adorable.io/avatars/50/${getDeterministicRandom(index)}`}/>
                    <CardText>
                        {item.content}
                    </CardText>
                    <CardActions>
                        <IconButton tooltip="delete this item" onClick={() => onItemDelete(item.id)}>
                            <ActionDelete />
                        </IconButton>
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
