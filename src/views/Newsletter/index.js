import Types from 'prop-types';
import React, {Component} from 'react';
import {Button, Container, TextField} from '@material-ui/core';
import {withStyles} from '@material-ui/styles';



class NewsletterView extends Component {
  static propTypes = {
    classes: Types.object.isRequired
  }

  constructor(props) {
    super(props);

    this.state = {
      content: '',
      email: '',
      title: ''
    };
  }

  onChange = (key) => (event) => {
    this.setState({
      [key]: event.target.value
    });
  }

  onSubmit = () => {
    const {
      content,
      email,
      title
    } = this.state;

    window.open(`mailto:${ email }?body=${ content }&subject=${ title }`);

    this.setState({
      content: '',
      email: '',
      title: ''
    });
  }

  render() {
    const {
      classes
    } = this.props;

    const {
      content,
      email,
      title
    } = this.state;

    return (
      <Container
        className={classes.Container}
        maxWidth="md"
      >
        <TextField
          required
          className={classes.TextField}
          label="Title"
          onChange={this.onChange('title')}
          value={title}
        />
        <TextField
          required
          className={classes.TextField}
          label="Email"
          onChange={this.onChange('email')}
          type="email"
          value={email}
        />
        <TextField
          multiline
          required
          className={classes.TextField}
          label="Content"
          onChange={this.onChange('content')}
          rows={4}
          value={content}
        />
        <Button
          fullWidth
          className={classes.Button}
          onClick={this.onSubmit}
          variant="contained"
        >
          Send
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
)(NewsletterView);