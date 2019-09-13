import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';

import './App.css';

import Header from './components/layout/header';
import Footer from './components/layout/footer';
import Login from './components/auth/login';
import Signup from './components/auth/signup';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <main>
            <Route exact path="/login" component={Login} />
            <Route exact path="/sign-up" component={Signup} />
          </main>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
