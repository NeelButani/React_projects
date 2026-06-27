import { useEffect, useState } from 'react'
import './App.css'
import ProductCard from './components/ProductCard'
import { PAGE_SIZE } from './constant'
import Pagination from './components/Pagination';
import usePagination from './hooks/usePagination';
import useProducts from './hooks/useProducts';

function App() {


  const { products, loading, error } = useProducts();

  const { currentPage, noOfPages, goToNextPage, goToPreviousPage, handlePageChange } = usePagination(products.length, PAGE_SIZE);
  const totalProducts = products.length;
  const start = currentPage * PAGE_SIZE;
  const end = start + PAGE_SIZE;


  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error}</h1>;
  if (!products) return <h1>No Products found</h1>;



  return !products.length ? (<h1>No Products found</h1>) : (
    <div>
      <h1>Pagination</h1>
      <Pagination
        goToPreviousPage={goToPreviousPage}
        noOfPages={noOfPages}
        currentPage={currentPage}
        handlePageChange={handlePageChange}
        goToNextPage={goToNextPage} />
      <div className='products-container' >
        {
          products.slice(start, end).map((p) => {
            return <ProductCard key={p.id} image={p.thumbnail} title={p.title} />
          })
        }
      </div>

    </div>
  )
}

export default App
