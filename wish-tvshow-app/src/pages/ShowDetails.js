import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import SingleShow from './SingleShow';

const ShowDetails = () => {
  const { id } = useParams();
  const {
    data: show,
    isLoading,
    error,
  } = useFetch(`https://api.tvmaze.com/shows/${id}`);

  const removeTags = (text) => {
    if (text === null || text === '') {
      return false;
    } else {
      text = text.toString();
    }
    return text.replace(/(<([^>]+)>)/gi, '');
  };

  return (
    <div className="container">
      {isLoading && <h3>Loading...</h3>}
      {error && <h3>Loading Error...</h3>}
      {show && (
        <div className="show-details-container">
          <SingleShow show={show} />

          <div className="show-details">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <strong>Show Type: </strong>
                {show.genres &&
                  show.genres.map((genre) => (
                    <span key={genre}>{genre + ' '}</span>
                  ))}
              </li>
              <li className="list-group-item">
                <strong>Status:</strong> {show.status && show.status}
              </li>
              <li className="list-group-item">
                <strong>Rating: </strong>
                {show.rating ? show.rating.average : 'No rating'}
              </li>
            </ul>
            <div className="card-body">
              {show.officialSite ? (
                <a
                  className="btn btn-primary"
                  href={show.officialSite}
                  target="_blank"
                  rel="noreferrer"
                >
                  Official Site
                </a>
              ) : (
                'No official site'
              )}
              <p>{show.summary && removeTags(show.summary)}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowDetails;
