import { useContext } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ShowsContext, { ShowsProvider } from '../hooks/ShowsContext';

function TestComponent({ id }) {
  const { favorites, isFavorite, toggleFavorite } = useContext(ShowsContext);
  return (
    <div>
      <div
        data-testid="favorites-test"
        data-value={JSON.stringify(favorites)}
      />

      <button data-testid="isFavorite-test" data-value={isFavorite(id)}>
        isFavorite
      </button>

      <button
        data-testid="toggleFavorite-test"
        onClick={() => toggleFavorite(id)}
      >
        toggleFavorite
      </button>
    </div>
  );
}

describe('ShowsContext', () => {
  it('Correctly sets favorites', () => {
    render(
      <ShowsProvider>
        <TestComponent />
      </ShowsProvider>
    );
    expect(screen.getByTestId('favorites-test')).toHaveAttribute(
      'data-value',
      '[]'
    );
  });

  it('check show with id', () => {
    render(
      <ShowsProvider>
        <TestComponent />
      </ShowsProvider>
    );
    const btnElement = screen.getByTestId('isFavorite-test');
    expect(btnElement).toHaveTextContent('isFavorite');
    fireEvent.click(btnElement);
    expect(screen.getByTestId('isFavorite-test')).toHaveAttribute(
      'data-value',
      'false'
    );
  });

  it('add and remove favorite', () => {
    const favoritesList = [{ id: 1, name: 'girls' }];
    render(
      <ShowsProvider>
        <TestComponent id={favoritesList[0].id} favorites={favoritesList} />
      </ShowsProvider>
    );
    const btnElement = screen.getByTestId('toggleFavorite-test');
    expect(btnElement).toHaveTextContent('toggleFavorite');
    fireEvent.click(btnElement);

    expect(screen.getByTestId('isFavorite-test')).toHaveAttribute(
      'data-value',
      'true'
    );
    expect(screen.getByTestId('favorites-test')).toHaveAttribute(
      'data-value',
      '[1]'
    );
    fireEvent.click(btnElement);
    expect(screen.getByTestId('isFavorite-test')).toHaveAttribute(
      'data-value',
      'false'
    );
    expect(screen.getByTestId('favorites-test')).toHaveAttribute(
      'data-value',
      '[]'
    );
  });
});
