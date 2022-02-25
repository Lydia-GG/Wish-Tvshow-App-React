import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import SingleShow from '../pages/SingleShow';

const MainList = ({ shows, isLoading, error }) => {
  const [pageNumber, setPageNumber] = useState(0);

  const showsPerPage = 12;
  const pagesVisited = pageNumber * showsPerPage;
  const displayShows = shows.slice(pagesVisited, pagesVisited + showsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="main-list">
      {isLoading && <h1>Loading...</h1>}
      {error && <h1>Loading Error...</h1>}
      {displayShows &&
        displayShows.map((show) => {
          return <SingleShow show={show} key={show.id} />;
        })}
      <ReactPaginate
        previousLabel={'Previous'}
        nextLabel={'Next'}
        pageCount={Math.ceil(shows.length / showsPerPage)}
        onPageChange={changePage}
        containerClassName={'pagination justify-content-center'}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}
        previousClassName={'page-item'}
        previousLinkClassName={'page-link'}
        nextClassName={'page-item'}
        nextLinkClassName={'page-link'}
        breakClassName={'page-item'}
        breakLinkClassName={'page-link'}
        activeClassName={'active'}
      />
    </div>
  );
};

export default MainList;
