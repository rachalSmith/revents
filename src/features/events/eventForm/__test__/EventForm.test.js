import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import EventForm from '../EventForm';


it('should initially have empty inputs for all forms accept the date', () => {
    render(<EventForm />);

    const eventTitle = screen.getByPlaceholderText('Event title');
    const eventCategory = screen.getByPlaceholderText('Category of event');
    const eventDescription = screen.getByPlaceholderText('Description');
    const eventCity = screen.getByPlaceholderText('City');
    const eventVenue = screen.getByPlaceholderText('Venue');

    expect(eventTitle.value).toBe('');
    expect(eventCategory.value).toBe('');
    expect(eventDescription.value).toBe('');
    expect(eventCity.value).toBe('');
    expect(eventVenue.value).toBe('');
})


it('should be able to add an event title to the form', () => {
    render(<EventForm />);
    const eventTitle = screen.getByPlaceholderText('Event title');

    userEvent.type(eventTitle, 'I am an event');

    expect(eventTitle.value).toBe('I am an event');
})


it('should be able to add an event category to the form', () => {
    render(<EventForm />);
    const eventCategory = screen.getByPlaceholderText('Category of event');

    userEvent.type(eventCategory, 'I am an event category');

    expect(eventCategory.value).toBe('I am an event category');
})


it('should be able to add an event description to the form', () => {
    render(<EventForm />);
    const eventDescription = screen.getByPlaceholderText('Description');

    userEvent.type(eventDescription, 'I am an event description');

    expect(eventDescription.value).toBe('I am an event description');
})


it('should be able to add an event destination to the form', () => {
    render(<EventForm />);
    const eventCity = screen.getByPlaceholderText('City');

    userEvent.type(eventCity, 'I am an event destination');

    expect(eventCity.value).toBe('I am an event destination');
})


it('should be able to add an event venue to the form', () => {
    render(<EventForm />);
    const eventVenue = screen.getByPlaceholderText('Venue');

    userEvent.type(eventVenue, 'I am an event venue');

    expect(eventVenue.value).toBe('I am an event venue');
})

/***** Figure out how to use expect and matcher for date *****/

// it('should be able to add a date to the form', () => {
//     render(<EventForm />);
//     const datePicker = screen.getByPlaceholderText('Date');

//     userEvent.click(datePicker);
//     userEvent.type(datePicker, {
//         target: {
//             value: '28/02/2022'
//         }
//     });
// })


it('should show a submit button', () => {
    render(<EventForm />)
    const submitButton = screen.getByRole('button', {name: 'Submit'});

    expect(submitButton).toBeInTheDocument();
})


it('should show a submit button', () => {
    render(<EventForm />)
    const cancelButton = screen.getByRole('button', {name: 'Cancel'});

    expect(cancelButton).toBeInTheDocument();
})