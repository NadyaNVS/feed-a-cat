import React from 'react';
import PageWrapper from '../layout/pageWrapper';
import products from '../../mocks/products';
import './style.css';

export default function App(props) {
  return <PageWrapper products={products} />
}


