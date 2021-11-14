import React from 'react';
import logo from './logo.svg';

import { Route } from 'react-router-dom';
import './App.css';
import { TextCounterPage } from './pages/textCounter/TextCounterPage';

function App() {
  return (
    <div className="App">
                <Route path="/textCounter" component={TextCounterPage}/>
    </div>
  );
}

export default App;
