import React from 'react'
import HeaderPage from '../Header/Header'
import SubHome from '../Home/SubHome'
import Collection from '../Collection/Collection'
import Ads from '../AdsPage/Ads'
import Category from '../Category/BrowseByCategory'
import Footer from '../Footer/Footer'
import { Box } from '@mui/material'

const Home  = () =>{
  return (
    <Box>
      <HeaderPage/>
      <SubHome/>
      <Collection/>
      <Ads/>
      <Category/>
      <Footer/>
    </Box>
  )
}

export default Home