import { useContext, useEffect, useState } from 'react';
import ShowsContext from '../hooks/ShowsContext';
import Pagination from '../components/Pagination';
import Alert from '../components/Alert';

const Favorites = () => {
  const { favorites } = useContext(ShowsContext);
  const [shows, setShows] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const promises = favorites.map((id) => {
      return fetch(`https://api.tvmaze.com/shows/${id}`);
    });
    setError(false);

    Promise.all(promises)
      .then((responses) => {
        return Promise.all(responses.map((response) => response.json()));
      })
      .then((results) => {
        setShows(results);
        setLoading(false);
      })
      .catch((error) => {
        setError(true);
        setLoading(false);
      });
  }, [favorites]);
  return (
    <div className="container favorites-page">
      <h1 className="title">Favorites</h1>

      <div className="error-message">
        {error && (
          <Alert
            message={'Something went wrong please try again later'}
            type="warning text-center"
          />
        )}
        {isLoading && (
          <div className="loading-img">
            <img
              src="https://res.cloudinary.com/hapiii/image/upload/v1645002734/samples/Elzero%20workshop/L/lzfgzxggm7jnfiz0r4kz.gif"
              alt="Not Found"
            />
          </div>
        )}
      </div>

      <div className="container" data-testid="favorite-test">
        {shows.length ? (
          <Pagination shows={shows} />
        ) : (
          !error && (
            <h5 className="no-favorites text-center">
              You have not chosen any favorites yet!
            </h5>
          )
        )}
      </div>
    </div>
  );
};

export default Favorites;
