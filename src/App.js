import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import Movies from './components/Movies';
import MovieDetails from './components/MovieDetails';
import MovieDisplay from './components/MovieDisplay';

function  App () {

  return (
    <div className='main'>
      <BrowserRouter>
          <Route path='/' exact component={Movies} />
          <Route path='/MovieDetails/:id' component={MovieDetails} />
          <Route path='/MovieDisplay/:id' component={MovieDisplay} />
      </BrowserRouter>
    </div>
  );
}

export default App;
