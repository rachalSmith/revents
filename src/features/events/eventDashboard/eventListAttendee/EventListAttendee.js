import React from 'react';
import { List, Image } from 'semantic-ui-react';


function EventListAttendee() {
  return (
    <>
      <List.Item>
        <Image size='mini' circular src='/assets/user.png' alt='attendee user image'/>
      </List.Item>
    </>

  );
}

export default EventListAttendee;