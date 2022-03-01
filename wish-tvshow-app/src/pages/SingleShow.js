import FavoriteIcon from '../components/FavoriteIcon';
import ShowCard from '../components/ShowCard';

const SingleShow = ({ show }) => {
  const { id, image, name } = show;

  return (
    <div
      className="card"
      data-testid="singleshow-test"
      data-testelementid={id}
      image={image}
    >
      <ShowCard id={id} image={image} name={name} />

      <div>
        <FavoriteIcon id={id} />
      </div>
    </div>
  );
};

export default SingleShow;
