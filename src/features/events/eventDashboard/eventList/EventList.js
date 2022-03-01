import React from 'react';
import PropTypes from 'prop-types';

import EventListItem from '../eventListItem/EventListItem';


function EventList({ events }) {
  return (
    <>
      {events.map(event => (
      <EventListItem event={event} key={event.id} />
      ))}
    </>
  );
}

export default EventList;


EventList.propTypes = {
  events : PropTypes.array.isRequired
}