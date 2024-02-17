

import React, { useState } from 'react';
import { Product, FooterBanner } from "../components";
import { client } from '../lib/client';
import Pagination from '../components/Pagination';

const Boutique = ({ products }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const limitPerPage = 8;

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const startIndex = (currentPage - 1) * limitPerPage;
  const endIndex = startIndex + limitPerPage;
  const visibleProducts = products.slice(startIndex, endIndex);

  return (
    <>
      <div className='products-heading'>
        <h2>Tous Nos Produits</h2>
        <p>Variété de motifs</p>
      </div>
      <div className='products-container'>
        {visibleProducts.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
      <Pagination
        numberOfItems={products.length}
        limitPerPage={limitPerPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type =="product"]';
  const products = await client.fetch(query);

  return {
    props: { products }
  };
};

export default Boutique;