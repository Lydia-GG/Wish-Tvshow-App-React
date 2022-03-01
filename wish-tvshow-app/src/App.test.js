import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

// favorites

const renderWithRouter = (component, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);

  return render(component, { wrapper: BrowserRouter });
};

describe('App', () => {
  it('Goes to the home page on /', () => {
    renderWithRouter(<App />, { route: '/' });
    expect(screen.getByTestId('hompage-test')).toHaveTextContent('Home');
  });

  it('Goes to about page on /about', () => {
    renderWithRouter(<App />, { route: '/about' });
    expect(screen.getByTestId('about-test')).toHaveTextContent('About');
  });

  it('Goes to the show details page on /show/:id', () => {
    renderWithRouter(<App />, { route: '/show/2' });

    expect(screen.getByTestId('showdetails-test')).toHaveAttribute(
      'data-testelementid',
      '2'
    );
  });

  it('Goes to the Favorites page on /favorites', async () => {
    renderWithRouter(<App />, {
      route: '/favorites',
    });
    expect(await screen.findByTestId('favorite-test')).toHaveTextContent(
      'You have not chosen any favorites yet!'
    );
  });

  it('Goes to the home page if the url is not recognized', () => {
    renderWithRouter(<App />, {
      route: '/something-that-does-not-match',
    });
    expect(screen.getByTestId('hompage-test')).toHaveTextContent('Home');
  });
});
