import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import AboutMe from '@/app/components/AboutMe/AboutMe';

describe('AboutMe Component', () => {
  beforeEach(() => {
    render(<AboutMe id="aboutme" />);
  });

  it('renders the "About me" heading', () => {
    const heading = screen.getByRole('heading', { name: /About me/i });
    expect(heading).toBeInTheDocument();
  });

  it('displays the correct content about experience', () => {
    const content = screen.getByText(`With over <b>14 years of experience</b>`);
    expect(content).toBeInTheDocument();
  });

  // Add more tests as needed to cover other aspects of the component.
});
