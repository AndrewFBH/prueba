import React from 'react';
import { Link } from 'react-router-dom';

export default function PagePicker(props) {
  const {  currentPage, category } = props;
  let nextPage = parseInt(currentPage) + 1;
  if ( nextPage > 25 ) {
    nextPage = 1;
  }

  return (
    <div className='page-picker'>
    <Link
      className='button'
      to={{
        pathname: `/${category}`,
        search: `?page=${currentPage - 1}`
      }}>
    Anterior
    </Link>
    <p style={{fontWeight: '300'}}>Página: {currentPage}</p>
    <Link
      className='button'
      to={{
        pathname: `/${category}`,
        search: `?page=${nextPage}`
      }}>
    Siguiente
    </Link>
    </div>
  )
}