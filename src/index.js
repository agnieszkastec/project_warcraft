import './index.css';



import React from 'react'
import {render} from 'react-dom';

import {Layout, Tasks, Theme, User, View} from './providers';



render(
  <Theme>
    <Tasks>
      <User>
        <View>
          <Layout />
        </View>
      </User>
    </Tasks>
  </Theme>,
  document.getElementById('root')
);