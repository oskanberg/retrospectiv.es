import React from 'react';
import {connect} from 'react-redux';
import ItemListContainer from '../ItemList/ItemListContainer';
import BoardContainer from '../Board/BoardContainer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import FontIcon from 'material-ui/FontIcon';
import {Link} from 'react-router';

const styles = {
    drawer: {
        overflow: 'hidden'
    }
};

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            drawerOpen: false
        };
    }

    handleDrawerClose() {
        this.setState({drawerOpen: false});
    }

    handleDrawerToggle() {
        this.setState({
            drawerOpen: !this.state.drawerOpen
        });
    }

    handleNewBoard() {
        this.handleDrawerClose();
        this.props.router.push('/new');
    }

    handleHome() {
        this.handleDrawerClose();
        this.props.router.push('/');
    }

    render() {
        return <MuiThemeProvider>
            <div>
                <AppBar onLeftIconButtonTouchTap={this.handleDrawerToggle.bind(this)} title="retrospectiv.es" style={{
                    position: 'fixed'
                }} zDepth={0}/>
                <Drawer docked={false} width={280} style={styles.drawer} open={this.state.drawerOpen} onRequestChange={(drawerOpen) => this.setState({drawerOpen})}>
                    <Menu>
                        <MenuItem primaryText="Home" onTouchTap={this.handleHome.bind(this)} leftIcon={(
                            <FontIcon className="material-icons">
                                home
                            </FontIcon>
                        )}/>
                        <MenuItem primaryText="Create New Board" onTouchTap={this.handleNewBoard.bind(this)} leftIcon={(
                            <FontIcon className="material-icons">
                                add
                            </FontIcon>
                        )}/>
                    </Menu>
                </Drawer>
                {this.props.children}
            </div>
        </MuiThemeProvider>;
    }
}

const mapStateToProps = (state) => {
    return {};
};

export default connect(mapStateToProps)(App);
