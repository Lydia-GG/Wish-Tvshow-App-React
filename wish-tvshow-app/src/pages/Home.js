import MainList from '../components/MainList';
import useFetch from '../hooks/useFetch';

const Home = () => {
  const {
    data: shows,
    isLoading,
    error,
  } = useFetch(`https://api.tvmaze.com/shows`);

  return (
    <div className="container homepage">
      <MainList shows={shows} isLoading={isLoading} error={error} />
    </div>
  );
};

export default Home;
