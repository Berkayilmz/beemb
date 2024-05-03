import React from 'react';
import Header from './components/Layout/Header/header';
import Footer from './components/Layout/Footer/footer';
import Policy from './components/Layout/Policy/policy';
import Slider from './components/Slider/sliders';
import Categories from './components/Categories/categories'
import Products from './components/Products/products'

const App = () => {
  return (
    <>
      <Header />
      <Slider />
      <Categories />
      <Products/>
      <Policy />
      <Footer />
    </>
  )
}

export default App