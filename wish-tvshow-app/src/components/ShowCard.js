import React from 'react';
import { Link } from 'react-router-dom';

const ShowCard = ({ id, image, name }) => {
  return (
    <div className="card-container">
      <Link to={`/show/${id}`}>
        <img
          className="card-img-top"
          src={image ? image.medium : 'https://plchldr.co/i/210x295'}
          alt={name}
        />
      </Link>
      <h5 className="card-title">{name}</h5>
    </div>
  );
};

export default ShowCard;
