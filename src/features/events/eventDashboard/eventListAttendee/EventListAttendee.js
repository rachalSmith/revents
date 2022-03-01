import React from 'react';
import { List, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';


function EventListAttendee({ attendee }) {
  return (
    <>
      <List.Item>
        <Image size='mini' circular src={attendee.photoURL} alt='attendee user image'/>
      </List.Item>
    </>

  );
}

export default EventListAttendee;


EventListAttendee.propTypes = {
  attendee : PropTypes.object.isRequired
}