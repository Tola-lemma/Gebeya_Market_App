import React from 'react'
import HeaderPage from './Header/Header'
import SubHome from './Home/SubHome'
import Collection from './Collection/Collection'
import Ads from './AdsPage/Ads'
import Category from './Category/BrowseByCategory'
import Footer from './Footer/Footer'

const Home  = () =>{
  return (
    <div>
      <HeaderPage/>
      <SubHome/>
      <Collection/>
      <Ads/>
      <Category/>
      <Footer/>
    </div>
  )
}

export default Home