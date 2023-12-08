import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { persistor, store } from './redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

function setFavicon(theme) {
  const favicon = document.querySelector('link[rel=\'icon\']');
  if (theme === 'dark') {
    favicon.href = './img/clarice_white.png';
  } else {
    favicon.href = './img/clarice_black.png';
  }
}

const theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

setFavicon(theme);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={'loading'} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
