const express = require('express');

const {getEmail} = require('../utils/user');
const {load, save} = require('../utils/data');



function send(_, response, data) {
  response.send(
    JSON.stringify(
      Object
        .entries(data)
        .map(([key, value]) => ({
          ...value,
          id: key
        }))
    )
  );
}



module.exports = express()
  .post(
    '*/add',
    (request, response) => {
      const data = load('tasks.json');
      const email = getEmail(request);

      const {
        done,
        id,
        label
      } = request.body;

      data[email] = {
        ...data[email],
        [id]: {
          done,
          label
        }
      };

      save(
        'tasks.json',
        data
      );

      send(
        request,
        response,
        data[email]
      );
    }
  )
  .post(
    '*/change',
    (request, response) => {
      const data = load('tasks.json');
      const email = getEmail(request);

      const {
        done,
        id,
        label
      } = request.body;

      data[email] = {
        ...data[email],
        [id]: {
          ...data[email][id],
          done,
          label
        }
      };

      save(
        'tasks.json',
        data
      );

      send(
        request,
        response,
        data[email]
      );
    }
  )
  .post(
    '*/fetch',
    (request, response) => {
      const data = load('tasks.json');
      const email = getEmail(request);

      send(
        request,
        response,
        data[email] || {}
      );
    }
  );