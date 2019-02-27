import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { NavLink } from 'react-router-dom';

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    link: {
        color: 'white',
    },
    activeLink: {
        color: 'yellow',
        textDecoration: 'none'
    },
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
};

class HeaderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            left: false
        };
        this.signout = this.signout.bind(this);
    }

    toggleDrawer = (side, open) => () => {
        this.setState({
            [side]: open,
        });
    };
    signout() {
        this.props.signout();
        setTimeout(() => {
            this.props.history.push('/');
        }, 1000);
    }

    render() {
        if (!this.props.user) {
            return null
        }
        const {classes} = this.props;
        const sideList = (
          <div className={classes.list}>
              <List>
                  {['Posts', 'Albums'].map((text, index) => (
                    <ListItem button key={text}>
                        <NavLink to={'/'+text}>
                            <ListItemText primary={text} />
                        </NavLink>
                    </ListItem>
                  ))}
              </List>
              <Divider/>
              <List>
                  <ListItem button onClick={this.signout}>
                      <ListItemText primary={'Sign out'} />
                  </ListItem>
              </List>
          </div>
        );
        return <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton onClick={this.toggleDrawer('left', true)} className={classes.menuButton} color="inherit"
                                aria-label="Menu">
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" color="inherit" className={classes.grow}>
                        {this.props.user}
                    </Typography>
                    <div>
                        <NavLink to='/albums' className={classes.link} activeClassName={classes.activeLink}>
                            <Button color="inherit">Albums</Button>
                        </NavLink>
                        <NavLink to='/posts' className={classes.links} activeClassName={classes.activeLink}>
                            <Button color="inherit">Posts</Button>
                        </NavLink>
                    </div>
                </Toolbar>
                <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
                    <div
                      tabIndex={0}
                      role="button"
                      onClick={this.toggleDrawer('left', false)}
                      onKeyDown={this.toggleDrawer('left', false)}
                    >
                        {sideList}
                    </div>
                </Drawer>
            </AppBar>
        </div>
    }
};

export default withStyles(styles)(withRouter(HeaderComponent));