import {feathers} from '@feathersjs/feathers';
import rest from '@feathersjs/rest-client';
import axios from 'axios';

const app = feathers();

const BASEURL = 'http://10.0.2.2:3030';
// Connect to a different URL
const restClient = rest(BASEURL);

// Configure an AJAX library (see below) with that client
app.configure(
  restClient.axios(
    axios.create({
      headers: {'Access-Control-Allow-Origin': '*'},
    }),
  ),
);

const messages = app.service('todo');
messages.get(1).then(
  res => {
    console.log('res', res);
  },
  err => {
    console.log('error');
    console.log(JSON.stringify(err));
  },
);

export default app;
