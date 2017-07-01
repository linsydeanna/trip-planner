import React from 'react';
import { connect } from 'react-redux';

import Navbar from '../components/Navbar';

const Trips = props => {
  let { user } = props;
  return (
    <div className="trips">
      <Navbar user={user} />
      Trips
    </div>
  );
};

const mapStoreToProps = store => ({
  user: store.user,
  trips: store.trips
});

export default connect(mapStoreToProps)(Trips);
