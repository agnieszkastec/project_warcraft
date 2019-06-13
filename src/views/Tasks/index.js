import Types from 'prop-types';
import React, {Component} from 'react';
import {Button, Card, CardHeader, Container, Dialog, DialogActions, DialogContent, DialogTitle, Fab, IconButton, TextField} from '@material-ui/core';
import {Add, CheckCircle, CheckCircleOutline} from '@material-ui/icons';
import {withStyles} from '@material-ui/styles';



class TasksView extends Component {
  static contextTypes = {
    tasks: Types.object.isRequired
  }

  static propTypes = {
    classes: Types.object.isRequired
  }

  constructor(props) {
    super(props);

    this.state = {
      modal: null
    };
  }

  onChange = (event) => {
    this.setState({
      modal: {
        done: false,
        id: event.target.value.toLowerCase(),
        label: event.target.value
      }
    });
  }

  onClose = () => {
    this.setState({
      modal: null
    });
  }

  onOpen = () => {
    this.setState({
      modal: {
        done: false,
        id: '',
        label: ''
      }
    });
  }

  render() {
    const {
      tasks
    } = this.context;

    const {
      classes
    } = this.props;

    const {
      modal
    } = this.state;

    return (
      <Container
        maxWidth="md"
      >
        {
          tasks
            .data
            .map(({done, id, label}) => (
              <Card
                className={classes.Card}
                key={id}
              >
                <CardHeader
                  avatar={
                    <IconButton
                      color="primary"
                      onClick={() => tasks.change({id, label, done: !done})}
                    >
                      {
                        done ?
                          <CheckCircle /> :
                          <CheckCircleOutline />
                      }
                    </IconButton>
                  }
                  title={label}
                />
              </Card>
            ))
        }
        <Fab
          className={classes.Fab}
          onClick={this.onOpen}
        >
          <Add />
        </Fab>
        <Dialog
          fullWidth
          onClose={this.onClose}
          open={!!modal}
        >
          <DialogTitle>
            Add task
          </DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              label="Label"
              onChange={this.onChange}
              value={modal ? modal.label : ''}
            />
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => tasks.add(modal)}
            >
              Add
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    );
  }
}



export default withStyles(
  ({spacing}) => ({
    Card: {
      marginTop: spacing(2)
    },
    Fab: {
      bottom: spacing(4),
      position: 'fixed',
      right: spacing(4)
    }
  })
)(TasksView);