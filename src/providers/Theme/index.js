import Types from 'prop-types';
import React, {Component} from 'react';
import {deepOrange, lightGreen} from '@material-ui/core/colors';
import {createMuiTheme} from '@material-ui/core/styles';
import {ThemeProvider as Provider} from '@material-ui/styles';



export default class ThemeProvider extends Component {
  static propTypes = {
    children: Types.node.isRequired
  }

  render() {
    const {
      children
    } = this.props;

    const theme = createMuiTheme({
      overrides: {
        MuiAppBar: {
          colorDefault: {
            backgroundColor: '#333',
            color: '#fff'
          }
        }
      },
      palette: {
        primary: deepOrange,
        secondary: lightGreen
      },
      props: {
        MuiAppBar: {
          color: 'default',
          component: 'div',
          position: 'static'
        },
        MuiButton: {
          color: 'primary'
        },
        MuiFab: {
          color: 'primary'
        },
        MuiListItem: {
          button: true
        },
        MuiTextField: {
          fullWidth: true
        },
        MuiTypography: {
          component: 'span'
        }
      }
    });

    return (
      <Provider
        theme={theme}
      >
        {
          children
        }
      </Provider>
    );
  }
}