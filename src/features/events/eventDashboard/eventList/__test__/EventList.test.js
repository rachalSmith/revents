import React from 'react';
import { render, screen } from '@testing-library/react';

import EventList from '../EventList'


it('should render 3 events', () => {
    render(<EventList />);
    const eventItems = screen.getAllByRole('list');
    expect(eventItems.length).toBe(3);
})