import Types from 'prop-types';
import React, {Component} from 'react';
import {AppBar, Divider, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography} from '@material-ui/core';
import {Assignment, Dashboard, Mail, Menu, Person} from '@material-ui/icons';
import {withStyles} from '@material-ui/styles';



class LayoutProvider extends Component {
  static contextTypes = {
    user: Types.object.isRequired,
    view: Types.object.isRequired
  }

  static propTypes = {
    classes: Types.object.isRequired
  }

  constructor(props) {
    super(props);

    this.state = {
      menu: false
    };
  }

  onClose = () => {
    this.setState({
      menu: false
    });
  }

  onOpen = () => {
    this.setState({
      menu: true
    });
  }

  render() {
    const {
      user,
      view
    } = this.context;

    const {
      classes
    } = this.props;

    const {
      menu
    } = this.state;

    return [
      <AppBar
        key="app-bar"
      >
        <Toolbar>
          <IconButton
            className={classes.IconButton}
            color="inherit"
            onClick={this.onOpen}
          >
            <Menu />
          </IconButton>
          <Typography
            variant="h6"
          >
            World of Warcraft planner
          </Typography>
        </Toolbar>
      </AppBar>,
      <Drawer
        key="drawer"
        onClose={this.onClose}
        open={menu}
      >
        {
          user.data ?
            <List>
              <ListItem
                onClick={() => view.change('news')}
              >
                <ListItemIcon>
                  <Dashboard />
                </ListItemIcon>
                <ListItemText
                  primary="News"
                />
              </ListItem>
              <ListItem
                onClick={() => view.change('newsletter')}
              >
                <ListItemIcon>
                  <Mail />
                </ListItemIcon>
                <ListItemText
                  primary="Newsletter"
                />
              </ListItem>
              <ListItem
                onClick={() => view.change('tasks')}
              >
                <ListItemIcon>
                  <Assignment />
                </ListItemIcon>
                <ListItemText
                  primary="Tasks"
                />
              </ListItem>
            </List> :
            <List>
              <ListItem
                onClick={() => view.change('news')}
              >
                <ListItemIcon>
                  <Dashboard />
                </ListItemIcon>
                <ListItemText
                  primary="News"
                />
              </ListItem>
            </List>
        }
        <Divider />
        {
          user.data ?
            <List>
              <ListItem
                onClick={() => user.signOut()}
              >
                <ListItemIcon>
                  <Person />
                </ListItemIcon>
                <ListItemText
                  primary="Sign out"
                />
              </ListItem>
            </List> :
            <List>
              <ListItem
                onClick={() => view.change('signIn')}
              >
                <ListItemIcon>
                  <Person />
                </ListItemIcon>
                <ListItemText
                  primary="Sign in"
                />
              </ListItem>
              <ListItem
                onClick={() => view.change('signUp')}
              >
                <ListItemIcon>
                  <Person />
                </ListItemIcon>
                <ListItemText
                  primary="Sign up"
                />
              </ListItem>
            </List>
        }
      </Drawer>
    ];
  }
}



export default withStyles(
  ({spacing}) => ({
    IconButton: {
      marginRight: spacing(3)
    }
  })
)(LayoutProvider);