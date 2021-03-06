import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import BookingContainer from './Booking/BookingContainer';
import NavBar from '../navbar.js';

const MainContainer = () => {

    return (
      <Router>
      <Fragment>
        <NavBar />
      <Switch>
        <Route path="/customers" component={BookingContainer}/>
      </Switch>
      </Fragment>
      </Router>
      // <BookingContainer/>
    )
}

export default MainContainer;
