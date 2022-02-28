import React from 'react';
import { render, screen } from '@testing-library/react';

import EventListItem from '../EventListItem'


it('should show an image of the user', () => {
    render(<EventListItem />)
    const userImage = screen.getByAltText('user image');
    expect(userImage).toBeInTheDocument();
})


it('should show a header of event title', () => {
    render(<EventListItem />);
    const header = screen.getByRole('heading');
    expect(header).toBeInTheDocument();
})


it('should show the name of the event host', () => {
    render(<EventListItem />);
    const eventHost = screen.getByText(/bob/i);
    expect(eventHost).toBeInTheDocument();
})


it('should show the date of the event', () => {
    render(<EventListItem />);
    const eventDate = screen.getByText(/date/i);
    expect(eventDate).toBeInTheDocument();
})


it('should show a button to view the event', () => {
    render(<EventListItem />);
    const viewButton = screen.getByRole('button', {name: 'View'})
    expect(viewButton).toBeInTheDocument();
})


it('should show the location of the event', () => {
    render(<EventListItem />);
    const eventVenue = screen.getByText(/venue/i);
    expect(eventVenue).toBeInTheDocument();
})


it('should show a list of people attending the event', () => {
    render(<EventListItem />);
    const eventAttendees = screen.getByRole('list');
    expect(eventAttendees).toBeInTheDocument();
})