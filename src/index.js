import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';

/*autre syntaxe
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
*/


ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
)