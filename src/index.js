import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import App from './App';
//imp from redux
import { Provider } from 'react-redux';
import store from './Components/Store';
//imp from router
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import BaseLayout from './Components/layout/BaseLayout';
import Form from './Components/form/Form';
import View from './Components/View/View';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <BaseLayout>
        <Switch>
          <Route exact path='/' component={App} />
          <Route exact path='/form' component={Form} />
          <Route exact path='/view' component={View} />
        </Switch>
      </BaseLayout>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
