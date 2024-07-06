import React from 'react';

import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { BrowserRouter as Router } from 'react-router-dom';
import { SWRConfig } from 'swr';

import {
  fireEvent,
  render,
  screen,
} from '@testing-library/react';

// eslint-disable-next-line jest/no-mocks-import
import {
  mockResponse,
  mockSearchResult,
  mockSortByStartResult,
} from '../__mocks__/MockData';
import Home from '../pages/Home';

// Mock server setup
const server = setupServer(
  rest.get('https://libraries.io/api/search', (req, res, ctx) => {
    if (req.url.toString().includes('search?q=next')) {
      return res(ctx.json(mockSearchResult));
    } else if (req.url.toString().includes('sort=stars')) {
      return res(ctx.json(mockSortByStartResult));
    } else {
      return res(ctx.json(mockResponse));
    }
  }),
);

beforeAll(() => {
  window.matchMedia =
    window.matchMedia ||
    function () {
      return {
        matches: false,
        addListener: function () {},
        removeListener: function () {},
      };
    };

  server.listen();
});
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

const renderWithSWR = (child: React.ReactElement) => {
  return render(
    <SWRConfig value={{}}>
      <Router>{child}</Router>
    </SWRConfig>,
  );
};

describe('Home Page', () => {
  test('renders search input and sort checkbox', () => {
    renderWithSWR(<Home />);
    expect(
      screen.getByPlaceholderText(/Search Packages.../i),
    ).toBeInTheDocument();
    expect(screen.getByText(/Sort by Stars/i)).toBeInTheDocument();
  });

  test('renders the list of package in the table', async () => {
    renderWithSWR(<Home />);
    expect(await screen.findByText(/react-dom/i)).toBeInTheDocument();
    // Table should have 6 rows, 1 for the header and 5 for the list of packages
    expect(screen.getAllByRole('row')).toHaveLength(mockResponse.length + 1);
  });

  test('Search modules by name', async () => {
    renderWithSWR(<Home />);
    // Check if it renders the mock response and not the searchMockRespons
    expect(await screen.findByText(mockResponse[0].name)).toBeInTheDocument();
    expect(screen.getByText(mockResponse[1].name)).toBeInTheDocument();
    expect(screen.getByText(mockResponse[2].name)).toBeInTheDocument();
    expect(screen.getByText(mockResponse[3].name)).toBeInTheDocument();
    expect(screen.getByText(mockResponse[4].name)).toBeInTheDocument();
    expect(
      screen.queryByText(mockSearchResult[0].name),
    ).not.toBeInTheDocument();

    // Simulate user typing into search
    fireEvent.change(screen.getByPlaceholderText(/Search Packages.../i), {
      target: { value: 'next' },
    });

    // Wait for the data to be fetched and updated
    expect(
      await screen.findAllByText(mockSearchResult[0].description),
    ).toHaveLength(1);

    const items = screen.getAllByRole('row');
    expect(items[1]).toHaveTextContent('next');
    expect(items[2]).toHaveTextContent('next-image');
  });

  test('Sort modules by stars', async () => {
    renderWithSWR(<Home />);
    // Check if it renders the mock response initially
    expect(await screen.findByText(mockResponse[0].name)).toBeInTheDocument();
    expect(
      screen.queryByText(mockSearchResult[0].name),
    ).not.toBeInTheDocument();

    // Simulate checking the sort checkbox
    const checkbox = screen.getByRole('checkbox', { name: /sort by stars/i });
    fireEvent.click(checkbox);

    // Wait for the data to be fetched and updated
    expect(
      await screen.findByText(mockSortByStartResult[0].name),
    ).toBeInTheDocument();
  });
});
