import React from 'react';
import { render, screen } from '@testing-library/react';

import EventListItem from '../EventListItem'

import { eventMock } from '../../../../../mocks/eventObjMock';


it('should show an image of the user', () => {
    render(<EventListItem event={ eventMock } />);
    const userImage = screen.getByAltText('host image');
    expect(userImage).toBeInTheDocument();
})


it('should show a header of event title', () => {
    render(<EventListItem event={ eventMock } />);
    const header = screen.getByRole('heading');
    expect(header).toBeInTheDocument();
})


it('should show the name of the event host', () => {
    render(<EventListItem event={ eventMock } />);
    const eventHost = screen.getByText(/bob/i);
    expect(eventHost).toBeInTheDocument();
})


// it('should show the date of the event', () => {
//     render(<EventListItem event={mockEvent} />)
//     const eventDate = screen.getByRole('');
// })


it('should show a button to view the event', () => {
    render(<EventListItem event={ eventMock } />);
    const viewButton = screen.getByRole('button', {name: 'View'})
    expect(viewButton).toBeInTheDocument();
})


it('should show the location of the event', () => {
    render(<EventListItem event={ eventMock } />);
    const eventVenue = screen.getByText(/venue/i);
    expect(eventVenue).toBeInTheDocument();
})


it('should show a list of people attending the event', () => {
    render(<EventListItem event={ eventMock } />);
    const eventAttendees = screen.getByRole('list');
    expect(eventAttendees).toBeInTheDocument();
})