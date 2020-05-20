import React from 'react';
import './App.css';
import Header from './Header.js';
import Contacts from './Contacts.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddContact from './AddContact';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Store'
import editContact from './editContact';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header branding="Contact Manager" />
          <div className="container">
            <p className="text-primary h1"><span className="text-danger">Contact</span> List</p>
            <Switch>
              <Route exact path="/add" component={AddContact} />
              <Route exact path="/" component={Contacts} />
              <Route exact path="/edit/:id" component={editContact} />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
