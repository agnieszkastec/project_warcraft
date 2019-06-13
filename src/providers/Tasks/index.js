import Types from 'prop-types';
import {Component} from 'react';

import fetch from '../../utils/fetch';



export default class TasksProvider extends Component {
  static childContextTypes = {
    tasks: Types.object
  }

  static propTypes = {
    children: Types.node.isRequired
  }

  constructor(props) {
    super(props);

    this.state = {
      tasks: []
    };
  }

  getChildContext() {
    const {
      tasks
    } = this.state;

    return {
      tasks: {
        add: this.add,
        change: this.change,
        data: tasks,
        fetch: this.fetch
      }
    };
  }

  add = (params) => {
    fetch('tasks/add', params).then((tasks) => {
      this.setState({
        tasks
      });
    });
  }

  change = (params) => {
    fetch('tasks/change', params).then((tasks) => {
      this.setState({
        tasks
      });
    });
  }

  fetch = () => {
    fetch('tasks/fetch').then((tasks) => {
      this.setState({
        tasks
      });
    });
  }

  render() {
    const {
      children
    } = this.props;

    return children;
  }
}