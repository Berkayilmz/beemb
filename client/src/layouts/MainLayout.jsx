import React, { useState } from 'react'
import Header from '../components/Layout/Header/header'
import Footer from '../components/Layout/Footer/footer'
import Search from '../components/Modals/Search/Search'

const MainLayout = (props) => {

const [isSearchShow,setIsSearchShow]=useState(false)

  return (
    <div className='main-layout'>
        <Search isSearchShow={isSearchShow} setIsSearchShow={setIsSearchShow}/>
        <Header setIsSearchShow={setIsSearchShow}/>
        {props.children}
        <Footer/>
    </div>
  )
}

export default MainLayout
