import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById("root"));

 root.render(
  <BrowserRouter>
  <Auth0Provider

    domain="dev-ilxofi7ebioc06e0.us.auth0.com"
    clientId="wFPYBtIli8qYpj2Y8oRFShTdd8LUShxD"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>
  </BrowserRouter>
 );