import ReactPaginate from 'react-paginate';
import { useState } from 'react';
import SingleShow from '../pages/SingleShow';

const Pagination = ({ shows }) => {
  const [pageNumber, setPageNumber] = useState(1);

  const showsPerPage = 12;
  const lastIndex = pageNumber * showsPerPage;
  const firstIndex = lastIndex - showsPerPage;
  const displayShows = shows.slice(firstIndex, lastIndex);

  const changePage = ({ selected }) => {
    setPageNumber(selected + 1);
  };
  return (
    <>
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

      <div className="displayed-shows d-flex flex-wrap justify-content-around">
        {displayShows &&
          displayShows.map((displayShow) => {
            return <SingleShow show={displayShow} key={displayShow.id} />;
          })}
      </div>
    </>
  );
};

export default Pagination;
