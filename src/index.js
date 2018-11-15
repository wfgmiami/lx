import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Test from './Test';
// import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
// import store from 'store';
import history from './history';

// import {routes} from 'main/configs/RoutesConfig';
// import * as serviceWorker from './serviceWorker';

// const theme = createMuiTheme({
//     overrides: {
//       AppBar: { // Name of the component ⚛️ / style sheet
//         root: { // Name of the rule
//           background: 'yellow', // Some CSS
//         },
//       },
//     },
//   });
  
// function App(){
//     return (
//     <MuiThemeProvider theme={theme}>
//         <Root />
//       </MuiThemeProvider>
//     )
// }

// ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(
 
            <Router history={history}>
                <App />
            </Router>
  
    , document.getElementById('root'));




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
