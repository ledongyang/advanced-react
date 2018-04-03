import React from 'react';
import axios from 'axios';
import ReactDOMServer from 'react-dom/server';
import config from 'config';
import StateApi from 'state-api';
import App from 'components/App';

const serverRender = async () => {
  const resp = await axios.get(`http://${config.host}:${config.port}/data`);
  const store = new StateApi(resp.data);

  return {
    initialMarkup: ReactDOMServer.renderToString(
      <App store={store} />
    ),
    initialData: resp.data
  };
};

export default serverRender;
