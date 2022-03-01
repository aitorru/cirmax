import React from 'react';
import ReactDOM from 'react-dom';

// Global css
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <h1 className='text-6xl'>Hola mundo</h1>
  </React.StrictMode>,
  document.getElementById('root') as HTMLDivElement
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}
