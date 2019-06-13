import Types from 'prop-types';
import React, {Component} from 'react';

import {News, Newsletter, SignIn, SignUp, Tasks} from '../../views';



export default class ViewProvider extends Component {
  static childContextTypes = {
    view: Types.object
  }

  static contextTypes = {
    user: Types.object.isRequired
  }

  static propTypes = {
    children: Types.node.isRequired
  }

  constructor(props) {
    super(props);

    this.state = {
      view: 'news'
    };
  }

  getChildContext() {
    const {
      view
    } = this.state;

    return {
      view: {
        change: this.change,
        data: view,
      }
    };
  }

  UNSAFE_componentWillReceiveProps(_, nextContext) {
    const {
      user: oldUser
    } = this.context;

    const {
      user: newUser
    } = nextContext;

    switch (true) {
      case !oldUser.data && !!newUser.data: {
        this.change('news');

        break;
      }

      case !!oldUser.data && !newUser.data: {
        this.change('news');

        break;
      }

      default: {}
    }
  }

  change = (view) => {
    this.setState({
      view
    });
  }

  render() {
    const {
      children
    } = this.props;

    const {
      view
    } = this.state;

    switch(view) {
      case 'news': {
        return [
          children,
          <News key="view" />
        ];
      }

      case 'newsletter': {
        return [
          children,
          <Newsletter key="view" />
        ];
      }

      case 'signIn': {
        return [
          children,
          <SignIn key="view" />
        ];
      }

      case 'signUp': {
        return [
          children,
          <SignUp key="view" />
        ];
      }

      case 'tasks': {
        return [
          children,
          <Tasks key="view" />
        ];
      }

      default: {
        return children;
      }
    }
  }
}