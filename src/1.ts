// School Project - Generate Random TS Code

function getRandomTSCode() {
  const code = `
  import React from 'react';
  import ReactDOM from 'react-dom';

  function App() {
    return (
      <div>
        <h1>Hello World!</h1>
      </div>
    );
  }

  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
`;

return code;
}
