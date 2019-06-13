const express = require('express');

const tasks = require('./routes/tasks');
const user = require('./routes/user');



express()
  .use(
    (_, response, next) => {
      response.set({
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      });

      next();
    }
  )
  .use(
    express.json()
  )
  .use(
    express
      .Router()
      .all(
        '/tasks/*',
        tasks
      )
      .all(
        '/user/*',
        user
      )
  )
  .listen(3001);