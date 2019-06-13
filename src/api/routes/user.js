const express = require('express');

const {getEmail} = require('../utils/user');
const {load, save} = require('../utils/data');



function send(request, response, data) {
  const {
    email
  } = request.body;

  response.send(
    JSON.stringify({
      ...data[email],
      email
    })
  );
}



module.exports = express()
  .post(
    '*/sign-in',
    (request, response) => {
      const data = load('user.json');

      const {
        email,
      } = request.body;

      data[email] = {
        ...data[email],
        token: Math.random().toString()
      };

      save(
        'user.json',
        data
      );

      send(
        request,
        response,
        data
      );
    }
  )
  .post(
    '*/sign-out',
    (request, response) => {
      const data = load('user.json');
      const email = getEmail(request);

      data[email] = {
        ...data[email],
        token: null
      };

      save(
        'user.json',
        data
      );

      response.send('null');
    }
  )
  .post(
    '*/sign-up',
    (request, response) => {
      const data = load('user.json');

      const {
        email,
        firstName,
        password,
        secondName
      } = request.body;

      data[email] = {
        firstName,
        password,
        secondName,
        token: Math.random().toString()
      };

      save(
        'user.json',
        data
      );

      send(
        request,
        response,
        data
      );
    }
  );