import { Link } from 'react-router-dom';

const SingleShow = ({ show }) => {
  return (
    <div className="card">
      <Link to={`/show/${show.id}`}>
        <img
          className="card-img-top"
          src={
            show.image
              ? show.image.medium
              : 'https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg'
          }
          alt={show.name}
        />
      </Link>
      <div className="card-body">
        <h5 className="card-title ">{show.name}</h5>
      </div>
      <button>more details...</button>
    </div>
  );
};

export default SingleShow;
