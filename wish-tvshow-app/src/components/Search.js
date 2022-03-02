import { useState } from 'react';
import FavoriteIcon from './FavoriteIcon';
import ShowCard from './ShowCard';
import useFetch from '../hooks/useFetch';
import Alert from './Alert';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [alert, setAlert] = useState({});
  const [notFound, setNotFound] = useState(false);

  const {
    data: shows,
    error,
    isLoading,
  } = useFetch(`https://api.tvmaze.com/search/shows?q=${searchTerm}`);

  const handleSearch = (e) => {
    e.preventDefault(e);

    if (shows.length === 0) {
      setAlert({
        type: 'danger',
        message: 'Not found please try something else',
      });
      setNotFound(true);
    } else {
      setSearchResult(shows);
      setNotFound(false);
    }

    if (searchTerm.length === 0) {
      setSearchResult([]);
      setAlert({
        type: 'warning',
        message: 'please enter something',
      });
      setNotFound(true);
    } else {
      setSearchResult(shows);
    }
    setSearchTerm('');
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="container searching-page">
      <div className="form">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            className="form-control"
            value={searchTerm}
            onChange={handleChange}
            placeholder="search for show..."
          />
          <button className="btn btn-success form-control">Search</button>
        </form>
      </div>
      <div className="searching-results d-flex justify-content-around flex-wrap">
        {isLoading && (
          <div className="loading-img">
            <img
              src="https://res.cloudinary.com/hapiii/image/upload/v1645002734/samples/Elzero%20workshop/L/lzfgzxggm7jnfiz0r4kz.gif"
              alt="Loading..."
            />
          </div>
        )}
        {error && (
          <Alert
            message="Something went wrong please try again later"
            type="warning text-center"
          />
        )}

        {notFound && (
          <div data-testid="emptyInput-test">
            <Alert type={alert.type} message={alert.message} />
          </div>
        )}

        {searchResult &&
          searchResult.map(({ show }) => {
            const { id, name, image } = show;
            return (
              <div className="search-item">
                <ShowCard id={id} image={image} name={name} />
                <FavoriteIcon id={id} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Search;
