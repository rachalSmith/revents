import React from 'react';
import { Button, Icon, Item, List, Segment } from 'semantic-ui-react';
import EventListAttendee from '../eventListAttendee/EventListAttendee';


function EventListItem() {
  return (
      <>
      <Segment.Group>
          <Segment>
              <Item.Group>
                  <Item>
                      <Item.Image size='tiny' circular src='/assets/user.png' alt='user image' />
                      <Item.Content>
                          <Item.Header role='heading' content='Event Title' />
                          <Item.Description>
                              Hosted by bob
                          </Item.Description>
                      </Item.Content>
                  </Item>
              </Item.Group>
          </Segment>
          <Segment>
              <span>
                  <Icon name='clock' /> Date
                  <Icon name='marker' /> Venue
              </span>
          </Segment>
          <Segment secondary>
            <List horizontal>
                <EventListAttendee />
                <EventListAttendee />
                <EventListAttendee />
            </List>
          </Segment>
          <Segment clearing>
              <div>Description of event</div>
              <Button color='teal' floated='right' content='View' />
          </Segment>
      </Segment.Group>
      </>
  );
}

export default EventListItem;