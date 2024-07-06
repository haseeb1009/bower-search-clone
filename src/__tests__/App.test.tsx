import '@testing-library/jest-dom/extend-expect';

import {
  render,
  screen,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from '../App';

describe('App Navigation', () => {
  test('lands on the home page by default', () => {
    render(<App />);

    // Check if the home page content is rendered
    expect(screen.getByText(/bower search clone/i)).toBeInTheDocument();
  });

  test('navigates to the about page when clicking the about link', async () => {
    render(<App />);

    // Click the About link in the SideNav
    const aboutLink = screen.getByRole('link', { name: /about/i });
    await userEvent.click(aboutLink);

    // Check if the about page content is rendered
    expect(screen.getByText(/About This Project/i)).toBeInTheDocument();
  });
});
