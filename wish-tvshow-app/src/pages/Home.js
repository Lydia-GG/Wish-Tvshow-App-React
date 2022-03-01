import useFetch from '../hooks/useFetch';
import Pagination from '../components/Pagination';
import Alert from '../components/Alert';

const Home = () => {
  const {
    data: shows,
    isLoading,
    error,
  } = useFetch(`https://api.tvmaze.com/shows`);

  const message = 'Something went wrong please try again later';
  const type = 'warning text-center';

  return (
    <div className="container homepage" data-testid="hompage-test">
      <h1>Home</h1>
      {isLoading && (
        <div className="loading-img">
          <img
            src="https://res.cloudinary.com/hapiii/image/upload/v1645002734/samples/Elzero%20workshop/L/lzfgzxggm7jnfiz0r4kz.gif"
            alt="Not Found"
          />
        </div>
      )}
      {error && <Alert message={message} type={type} />}
      {shows && <Pagination shows={shows} />}
    </div>
  );
};

export default Home;
