import React from 'react';
import { render, screen } from '@testing-library/react';

import EventListAttendee from '../EventListAttendee'



it('should show an image of the user', () => {
    render(<EventListAttendee />)
    const userImage = screen.getByAltText('attendee user image');
    expect(userImage).toBeInTheDocument();
})
