import { useContext } from 'react';
import ShowsContext from '../hooks/ShowsContext';

const FavoriteIcon = ({ id }) => {
  const { toggleFavorite, isFavorite } = useContext(ShowsContext);

  const inFavorite = isFavorite(id);

  return (
    <div
      className="favorite-icon"
      onClick={(e) => {
        toggleFavorite(id);
      }}
      className="favorite-icon"
    >
      <i className={inFavorite ? 'fas fa-heart red' : 'fas fa-heart'}></i>
    </div>
  );
};

export default FavoriteIcon;
