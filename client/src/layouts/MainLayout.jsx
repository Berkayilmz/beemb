import React, { useState,useEffect } from 'react'
import Header from '../components/Layout/Header/header'
import Footer from '../components/Layout/Footer/footer'
import Search from '../components/Modals/Search/Search'
import Dialog from '../components/Modals/Dialog/Dialog'

const MainLayout = (props) => {

  const [isSearchShow, setIsSearchShow] = useState(false)
  const [isDialogShow, setIsDialogShow] = useState(false)

  useEffect(()=>{
    const dialogStatus=localStorage.getItem('dialog') ? JSON.parse(localStorage.getItem('dialog')) : localStorage.setItem('dialog', JSON.stringify(true))

    setTimeout(()=>{
      setIsDialogShow(dialogStatus)
    },2000)
  })

  return (
    <div className='main-layout'>
      <Dialog isDialogShow={isDialogShow} setIsDialogShow={setIsDialogShow}/>
      <Search isSearchShow={isSearchShow} setIsSearchShow={setIsSearchShow} />
      <Header setIsSearchShow={setIsSearchShow} />
      {props.children}
      <Footer />
    </div>
  )
}

export default MainLayout
