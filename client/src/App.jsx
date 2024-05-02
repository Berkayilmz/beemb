import React from 'react';
import Header from './components/Layout/Header/header';
import Footer from './components/Layout/Footer/footer';
import Policy from './components/Layout/Policy/policy';
import Slider from './components/Slider/sliders';

const App = () => {
  return (
    <>
      <Header />
      <Slider />
      <div>App</div>
      <Policy />
      <Footer />
    </>
  )
}

export default App