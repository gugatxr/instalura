import React from 'react';
import ReactDOM from 'react-dom';

import {
    BrowserRouter as Router,
    Route,
    Redirect
} from 'react-router-dom';

import App from './App';
import Login from './componentes/Login';
import Logout from './componentes/Logout';

import registerServiceWorker from './registerServiceWorker';

function verificaAutenticacao(nextState,replace) {
    if(localStorage.getItem('auth-token') === null){
        return false
    }

    return true
  }

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props => {
                if ( verificaAutenticacao() ) {
                    return <Component {...props} />
                }

                return (
                    <Redirect
                        to="/?msg=você precisa estar logado para acessar o endereço"
                    />
                )   
            }   
        }   
    />
  );

ReactDOM.render(
    <Router>
        <React.Fragment>
            <Route exact path='/' component={Login} />
            <Route exact path='/logout' component={Logout} />
            <PrivateRoute path='/timeline' component={App} />
        </React.Fragment>
    </Router>,
    document.getElementById('root')
);
registerServiceWorker();
