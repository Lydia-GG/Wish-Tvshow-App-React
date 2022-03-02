import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import FavoriteIcon from '../components/FavoriteIcon';
import ShowCard from '../components/ShowCard';
import Alert from '../components/Alert';

const ShowDetails = () => {
  const { id } = useParams();
  const idNumber = +id;
  const {
    data: show,
    error,
    isLoading,
  } = useFetch(`https://api.tvmaze.com/shows/${idNumber}`);

  const removeTags = (text) => {
    if (text === null || text === '') {
      return false;
    } else {
      text = text.toString();
    }
    return text.replace(/(<([^>]+)>)/gi, '');
  };

  return (
    <div
      className="container show-details"
      data-testelementid={idNumber}
      data-testid="showdetails-test"
    >
      {isLoading && (
        <div className="loading-img">
          <img
            src="https://res.cloudinary.com/hapiii/image/upload/v1645002734/samples/Elzero%20workshop/L/lzfgzxggm7jnfiz0r4kz.gif"
            alt="loading.."
          />
        </div>
      )}
      {error && (
        <Alert
          message="Something went wrong please try again later"
          type="warning text-center"
        />
      )}
      {show && (
        <div className="show-details-container">
          <div className="container-card">
            <ShowCard id={show.id} image={show.image} name={show.name} />
            <FavoriteIcon id={idNumber} />
          </div>
          <div className="text-details">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <strong>Show Type: </strong>
                {show.genres &&
                  show.genres.map((genre) => (
                    <span key={genre} className="btn btn-success show-type">
                      {genre + ' '}
                    </span>
                  ))}
              </li>
              <li className="list-group-item">
                <strong>Status:</strong> {show.status && show.status}
              </li>
              <li className="list-group-item">
                <strong>Rating: </strong>
                {show.rating.average > 0 ? show.rating.average : 'No rating'}
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
              <h5>Summary:</h5>
              <p>
                {show.summary === null
                  ? 'No Summary Found'
                  : show.summary && removeTags(show.summary)}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowDetails;
