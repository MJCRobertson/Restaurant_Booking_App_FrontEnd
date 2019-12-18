import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import BookingContainer from './Booking/BookingContainer';

const MainContainer = () => {

    return (
      <Router>
      <Fragment>
      <Switch>
        <Route path="/customers" component={BookingContainer}/>
      </Switch>
      </Fragment>
      </Router>
      // <BookingContainer/>
    )
}

export default MainContainer;
