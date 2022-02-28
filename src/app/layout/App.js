import React from 'react';
import { Container } from 'semantic-ui-react';

import EventDashboardContainer from '../../features/events/eventDashboardContainer/EventDashboardContainer';
import NavBar from '../../features/nav/NavBar';

import './styles.css';

function App() {
  return (
    <>
      <NavBar />
        <Container className='main'>
          <EventDashboardContainer />
        </Container>
    </>
  );
}

export default App;
