import Types from 'prop-types';
import React, {Component} from 'react';
import {Button, Container, TextField} from '@material-ui/core';
import {withStyles} from '@material-ui/styles';



class SignInView extends Component {
  static contextTypes = {
    user: Types.object.isRequired
  }

  static propTypes = {
    classes: Types.object.isRequired
  }

  constructor(props) {
    super(props);

    this.state = {
      email: 'john.doe@example.com',
      password: '12345'
    };
  }

  onChange = (key) => (event) => {
    this.setState({
      [key]: event.target.value
    });
  }

  onSubmit = () => {
    const {
      user
    } = this.context;

    user.signIn(this.state);
  }

  render() {
    const {
      classes
    } = this.props;

    const {
      email,
      password
    } = this.state;

    return (
      <Container
        className={classes.Container}
        maxWidth="xs"
      >
        <TextField
          required
          className={classes.TextField}
          label="Email"
          onChange={this.onChange('email')}
          type="email"
          value={email}
        />
        <TextField
          required
          className={classes.TextField}
          label="Password"
          onChange={this.onChange('password')}
          type="password"
          value={password}
        />
        <Button
          fullWidth
          className={classes.Button}
          onClick={this.onSubmit}
          variant="contained"
        >
          Sign in
        </Button>
      </Container>
    );
  }
}



export default withStyles(
  ({spacing}) => ({
    Button: {
      marginTop: spacing(2)
    },
    Container: {
      marginTop: spacing(16)
    },
    TextField: {
      marginBottom: spacing(2)
    }
  })
)(SignInView);