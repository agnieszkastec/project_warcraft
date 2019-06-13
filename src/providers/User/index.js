import Types from 'prop-types';
import {Component} from 'react';

import fetch from '../../utils/fetch';



export default class UserProvider extends Component {
  static childContextTypes = {
    user: Types.object
  }

  static contextTypes = {
    tasks: Types.object.isRequired
  }

  static propTypes = {
    children: Types.node.isRequired
  }

  constructor(props) {
    super(props);

    this.state = {
      user: null
    };
  }

  getChildContext() {
    const {
      user
    } = this.state;

    return {
      user: {
        data: user,
        signIn: this.signIn,
        signOut: this.signOut,
        signUp: this.signUp
      }
    };
  }

  signIn = (params) => {
    const {
      tasks
    } = this.context;

    fetch('user/sign-in', params).then((user) => {
      window
        .localStorage
        .setItem('token', user.token);

      this.setState({
        user
      });

      tasks.fetch();
    });
  }

  signOut = () => {
    const {
      tasks
    } = this.context;

    fetch('user/sign-out').then((user) => {
      window
        .localStorage
        .removeItem('token');

      this.setState({
        user
      });

      tasks.fetch();
    });
  }

  signUp = (params) => {
    const {
      tasks
    } = this.context;

    fetch('user/sign-up', params).then((user) => {
      window
        .localStorage
        .setItem('token', user.token);

      this.setState({
        user
      });

      tasks.fetch();
    });
  }

  render() {
    const {
      children
    } = this.props;

    return children;
  }
}