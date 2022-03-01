import React from 'react';
import { render, screen } from '@testing-library/react';

import EventList from '../EventList';

import { eventMock } from '../../../../../mocks/eventMock';


it('should render the correct amount of events', () => {
    render(<EventList events={ eventMock } />);
    const eventItems = screen.getAllByRole('list');
    expect(eventItems.length).toBe(1);
})


it('should display the corrent amount of attendees', () => {
    render(<EventList events={ eventMock } />);
    const attendeeImage = screen.getAllByAltText('attendee user image');
    expect(attendeeImage.length).toBe(2);
})