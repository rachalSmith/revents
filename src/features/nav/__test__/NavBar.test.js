import React from 'react';
import { render, screen } from '@testing-library/react';

import NavBar from '../NavBar';


it('should show the logo in the nav bar', () => {
    render(<NavBar />);
    const logo = screen.getByAltText(/logo/i);
    expect(logo).toBeInTheDocument();
})


it('should show the Create Event button in the nav bar', () => {
    render(<NavBar />);
    const createEventButton = screen.getByRole('button', {name: /Create Event/i});
    expect(createEventButton).toBeInTheDocument();
})


it('should show the Login button in the nav bar', () => {
    render(<NavBar />);
    const loginButton = screen.getByRole('button', {name: /Login/i});
    expect(loginButton).toBeInTheDocument();
})


it('should show the Register button in the nav bar', () => {
    render(<NavBar />);
    const registerButton = screen.getByRole('button', {name: /Register/i});
    expect(registerButton).toBeInTheDocument();
})