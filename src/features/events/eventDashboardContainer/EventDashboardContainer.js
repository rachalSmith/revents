import React from 'react';
import { Grid } from 'semantic-ui-react';

import EventList from '../eventDashboard/eventList/EventList'
import EventForm from '../eventForm/EventForm';

import { sampleData } from '../../../app/api/sampleData';


function EventDashboardContainer() {
  return (
    <Grid>
      <Grid.Column width={10}>
        <EventList events={sampleData} />
      </Grid.Column>
      <Grid.Column width={6}>
        <EventForm />
      </Grid.Column>
    </Grid>
  );
}

export default EventDashboardContainer;