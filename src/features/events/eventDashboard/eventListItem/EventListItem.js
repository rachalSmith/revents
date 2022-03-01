import React from 'react';
import { Button, Icon, Item, List, Segment } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import EventListAttendee from '../eventListAttendee/EventListAttendee';


function EventListItem({ event }) {
  return (
      <>
      <Segment.Group>
          <Segment>
              <Item.Group>
                  <Item>
                      <Item.Image size='tiny' circular src={event.hostPhotoURL} alt='host image' />
                      <Item.Content>
                          <Item.Header role='heading' content={event.title} />
                          <Item.Description>
                              Hosted by {event.hostedBy}
                          </Item.Description>
                      </Item.Content>
                  </Item>
              </Item.Group>
          </Segment>
          <Segment>
              <span>
                  <Icon name='clock' /> {event.date.toLocaleDateString()}
                  <Icon name='marker' /> {event.venue.address}
              </span>
          </Segment>
          <Segment secondary>
            <List horizontal>
                {event.attendees.map(attendee => (
                 <EventListAttendee key={attendee.id} attendee={attendee} />
                ))}


            </List>
          </Segment>
          <Segment clearing>
              <div>{event.description}</div>
              <Button color='teal' floated='right' content='View' />
          </Segment>
      </Segment.Group>
      </>
  );
}

export default EventListItem;

EventListItem.propTypes = {
    event : PropTypes.object.isRequired
  }