import React, {PropTypes} from 'react';
import IconButton from 'material-ui/IconButton';
import ActionDelete from 'material-ui/svg-icons/action/delete';
import ThumbUp from 'material-ui/svg-icons/action/thumb-up';
import Edit from 'material-ui/svg-icons/image/edit';

import {
    Card,
    CardActions,
    CardHeader,
    CardMedia,
    CardTitle,
    CardText
} from 'material-ui/Card';

import sjcl from 'sjcl';

const styles = {
    card: {
        marginBottom: '2em'
    },
    headerText: {
        paddingRight: '16px'
    },
    headerRoot: {
        padding: '16px 56px 16px 16px'
    },
    subtitle: {
        fontWeight: 100,
        fontSize: 20
    }
};

const hash = (text) => {
    let bitArray = sjcl.hash.sha256.hash(text);
    return sjcl.codec.hex.fromBits(bitArray);
};

const ItemList = ({items, onItemDelete}) => {
    return (
        <div>
            {items.map((item, index) => <div key={item.id}>
                <Card style={styles.card}>
                    <CardHeader textStyle={styles.headerText} style={styles.headerRoot} subtitleStyle={styles.subtitle} subtitle={item.content} avatar={`https://api.adorable.io/avatars/50/${hash(item.content)}`}/>
                    <CardActions>
                        <IconButton tooltip="delete this item" onClick={() => onItemDelete(item.id)}>
                            <ActionDelete/>
                        </IconButton>
                        <IconButton tooltip="i agree" disabled={true}>
                            <ThumbUp/>
                        </IconButton>
                        <IconButton tooltip="edit" disabled={true}>
                            <Edit/>
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
