import React, {PropTypes} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const styles = {
    card: {
        'marginBottom': '2em'
    }
};

const ItemList = ({items}) => (
    <div>
        {items.map(item => <div className="row" id={item.key}>
            <Card key={item.id} style={styles.card}>
                <CardHeader title="Δ" subtitle={item.content} avatar="http://www.material-ui.com/images/jsa-128.jpg"/>
                <CardActions>
                    <FlatButton label="Action1"/>
                    <FlatButton label="Action2"/>
                </CardActions>
            </Card>
        </div>)}
    </div>
);

ItemList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.string.isRequired, content: PropTypes.string.isRequired}).isRequired).isRequired
};

export default ItemList;
