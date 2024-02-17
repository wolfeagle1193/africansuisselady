/*import React from 'react';

const Pagination = ({ numberOfItems, limitPerPage, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(numberOfItems / limitPerPage);
  const paginationSize = 7;

  const getPageList = (totalPages, page, maxLength) => {
    const sideWidth = maxLength < 9 ? 1 : 2;
    const leftWidth = (maxLength - sideWidth * 2 - 3) >> 1;
    const rightWidth = (maxLength - sideWidth * 2 - 3) >> 1;

    if (totalPages <= maxLength) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    if (page <= maxLength - sideWidth - 1 - rightWidth) {
      return [
        ...Array.from({ length: maxLength - sideWidth - 1 }, (_, i) => i + 1),
        0,
        ...Array.from({ length: sideWidth }, (_, i) => totalPages - sideWidth + i + 1),
      ];
    }

    if (page >= totalPages - sideWidth - 1 - rightWidth) {
      return [
        ...Array.from({ length: sideWidth }, (_, i) => i + 1),
        0,
        ...Array.from({ length: rightWidth + leftWidth }, (_, i) => page - leftWidth + i),
        0,
        ...Array.from({ length: sideWidth }, (_, i) => totalPages - sideWidth + i + 1),
      ];
    }

    return [
      ...Array.from({ length: sideWidth }, (_, i) => i + 1),
      0,
      ...Array.from({ length: rightWidth }, (_, i) => page - leftWidth + i),
      ...Array.from({ length: sideWidth }, (_, i) => totalPages - sideWidth + i + 1),
    ];
  };

  const handlePageChange = (page) => {
    if (page !== currentPage) {
      onPageChange(page);
    }
  };

  const renderPagination = () => {
    const pageList = getPageList(totalPages, currentPage, paginationSize);

    return (
      <ul className="pagination">
        <li
          className={`page-item previous-page ${currentPage === 1 ? 'disable' : ''}`}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          <a className="page-link" href="javascript:void(0)">
            Préc
          </a>
        </li>
        {pageList.map((item, index) => (
          <li
            key={index}
            className={`page-item ${item ? 'current-page' : 'dots'} ${item === currentPage ? 'active' : ''}`}
            onClick={() => handlePageChange(item)}
          >
            <a className="page-link" href="javascript:void(0)">
              {item || '...'}
            </a>
          </li>
        ))}
        <li
          className={`page-item next-page ${currentPage === totalPages ? 'disable' : ''}`}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          <a className="page-link" href="javascript:void(0)">
            Suiv
          </a>
        </li>
      </ul>
    );
  };

  return <>{renderPagination()}</>;
};

export default Pagination;*/



/*import React from 'react';

const Pagination = ({ numberOfItems, limitPerPage, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(numberOfItems / limitPerPage);
  const paginationSize = 7;

  const getPageList = (totalPages, page, maxLength) => {
    const sideWidth = maxLength < 9 ? 1 : 2;
    const leftWidth = (maxLength - sideWidth * 2 - 3) >> 1;
    const rightWidth = (maxLength - sideWidth * 2 - 3) >> 1;

    if (totalPages <= maxLength) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    if (page <= maxLength - sideWidth - 1 - rightWidth) {
      return [
        ...Array.from({ length: maxLength - sideWidth - 1 }, (_, i) => i + 1),
        0,
        ...Array.from({ length: sideWidth }, (_, i) => totalPages - sideWidth + i + 1),
      ];
    }

    if (page >= totalPages - sideWidth - 1 - rightWidth) {
      return [
        ...Array.from({ length: sideWidth }, (_, i) => i + 1),
        0,
        ...Array.from({ length: rightWidth + leftWidth }, (_, i) => page - leftWidth + i),
        0,
        ...Array.from({ length: sideWidth }, (_, i) => totalPages - sideWidth + i + 1),
      ];
    }

    return [
      ...Array.from({ length: sideWidth }, (_, i) => i + 1),
      0,
      ...Array.from({ length: rightWidth }, (_, i) => page - leftWidth + i),
      ...Array.from({ length: sideWidth }, (_, i) => totalPages - sideWidth + i + 1),
    ];
  };

  const handlePageChange = (page) => {
    if (page !== currentPage) {
      onPageChange(page);
    }
  };

  const renderPagination = () => {
    const pageList = getPageList(totalPages, currentPage, paginationSize);

    return (
      <ul className="pagination">
        <li
          className={`page-item previous-page ${currentPage === 1 ? 'disable' : ''}`}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          <a className="page-link" href="#"
            onClick={(event) => {
              event.preventDefault();
              handlePageChange(currentPage - 1);
            }}
          >
            Préc
          </a>
        </li>
        {pageList.map((item, index) => (
          <li
            key={index}
            className={`page-item ${item ? 'current-page' : 'dots'} ${item === currentPage ? 'active' : ''}`}
            onClick={() => handlePageChange(item)}
          >
            <a className="page-link" href="#"
              onClick={(event) => {
                event.preventDefault();
                handlePageChange(item);
              }}
            >
              {item || '...'}
            </a>
          </li>
        ))}
        <li
          className={`page-item next-page ${currentPage === totalPages ? 'disable' : ''}`}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          <a className="page-link" href="#"
            onClick={(event) => {
              event.preventDefault();
              handlePageChange(currentPage + 1);
            }}
          >
            Suiv
          </a>
        </li>
      </ul>
    );
  };

  return <>{renderPagination()}</>;
};

export default Pagination;*/



import React from 'react';

const Pagination = ({ numberOfItems, limitPerPage, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(numberOfItems / limitPerPage);
  const paginationSize = 7;

  const getPageList = (totalPages, page, maxLength) => {
    const sideWidth = maxLength < 9 ? 1 : 2;
    const leftWidth = (maxLength - sideWidth * 2 - 3) >> 1;
    const rightWidth = (maxLength - sideWidth * 2 - 3) >> 1;

    if (totalPages <= maxLength) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    if (page <= maxLength - sideWidth - 1 - rightWidth) {
      return [
        ...Array.from({ length: maxLength - sideWidth - 1 }, (_, i) => i + 1),
        0,
        ...Array.from({ length: sideWidth }, (_, i) => totalPages - sideWidth + i + 1),
      ];
    }

    if (page >= totalPages - sideWidth - 1 - rightWidth) {
      return [
        ...Array.from({ length: sideWidth }, (_, i) => i + 1),
        0,
        ...Array.from({ length: rightWidth + leftWidth }, (_, i) => page - leftWidth + i),
        0,
        ...Array.from({ length: sideWidth }, (_, i) => totalPages - sideWidth + i + 1),
      ];
    }

    return [
      ...Array.from({ length: sideWidth }, (_, i) => i + 1),
      0,
      ...Array.from({ length: rightWidth }, (_, i) => page - leftWidth + i),
      ...Array.from({ length: sideWidth }, (_, i) => totalPages - sideWidth + i + 1),
    ];
  };

  const handlePageChange = (page) => {
    if (page !== currentPage) {
      onPageChange(page);
    }
  };

  const renderPagination = () => {
    const pageList = getPageList(totalPages, currentPage, paginationSize);

    return (
      <ul className="pagination">
        <li
          className={`page-item previous-page ${currentPage === 1 ? 'disable' : ''}`}
          onClick={() => {
            if (currentPage !== 1) {
              handlePageChange(currentPage - 1);
            }
          }}
        >
          <a className="page-link" href="#">
            Préc
          </a>
        </li>
        {pageList.map((item, index) => (
          <li
            key={index}
            className={`page-item ${item ? 'current-page' : 'dots'} ${item === currentPage ? 'active' : ''}`}
            onClick={() => {
              if (item) {
                handlePageChange(item);
              }
            }}
          >
            <a className="page-link" href="#">
              {item || '...'}
            </a>
          </li>
        ))}
        <li
          className={`page-item next-page ${currentPage === totalPages ? 'disable' : ''}`}
          onClick={() => {
            if (currentPage !== totalPages) {
              handlePageChange(currentPage + 1);
            }
          }}
        >
          <a className="page-link" href="#">
            Suiv
          </a>
        </li>
      </ul>
    );
  };

  return <>{renderPagination()}</>;
};

export default Pagination;