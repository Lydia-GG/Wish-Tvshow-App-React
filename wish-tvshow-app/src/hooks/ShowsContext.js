import { createContext, useEffect, useState } from 'react';

const ShowsContext = createContext();

export const ShowsProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(
    localStorage.getItem('favorites')
      ? JSON.parse(localStorage.getItem('favorites'))
      : []
  );

  const isFavorite = (id) => {
    return favorites.includes(id);
  };

  const toggleFavorite = (id) => {
    const inFavorite = isFavorite(id);
    if (inFavorite) {
      const favoritesList = favorites.filter((favorite) => favorite !== id);
      setFavorites(favoritesList);
    } else {
      setFavorites([...favorites, id]);
    }
  };

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  return (
    <ShowsContext.Provider
      value={{
        favorites,
        isFavorite,
        toggleFavorite,
      }}
    >
      {children}
    </ShowsContext.Provider>
  );
};

export default ShowsContext;
