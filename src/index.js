import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

import { ProvideSidebar } from './context/use-sidebar';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <ProvideSidebar>
      <App />
    </ProvideSidebar>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorkerRegistration.register();
