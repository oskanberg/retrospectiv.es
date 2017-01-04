import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import {Link} from 'react-router';

const styles = {
    message: {
        marginTop: '7em',
        marginBottom: '1em',
        textAlign: 'center'
    },
    createNewBoard: {
        marginTop: '1em'
    }
};

class Welcome extends React.Component {
    render() {
        return <section id="welcome-message" className="col-xs-12 col-md-6 col-md-offset-3" style={styles.message}>
            <h3>Welcome to retrospectiv.es!</h3>
            <Link to='/new'>
                <RaisedButton style={styles.createNewBoard} label="Create New Board" labelPosition="before" primary={true} icon={(
                    <FontIcon className="material-icons">
                        add
                    </FontIcon>
                )}/>
            </Link>
        </section>;
    }
}

export default Welcome;
