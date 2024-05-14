import React from 'react'
import Header from '../components/Layout/Header/header'
import Footer from '../components/Layout/Footer/footer'

const MainLayout = (props) => {
  return (
    <>
        <Header/>
        {props.children}
        <Footer/>
    </>
  )
}

export default MainLayout
