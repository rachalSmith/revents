import React from 'react';
import { render, screen } from '@testing-library/react';

import EventListAttendee from '../EventListAttendee'

import { eventMock } from '../../../../../mocks/eventMock';

it('should show an image of the user', () => {
    render(<EventListAttendee attendee={ eventMock } />);
    const attendeeImage = screen.getByAltText('attendee user image');
    expect(attendeeImage).toBeInTheDocument();
})




