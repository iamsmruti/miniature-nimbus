import React from 'react'
import {
  Box
} from '@mui/material'

import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import TopNews from '../components/TopNews'

const LandingPage = ({news}) => {
  

  return (
    <Box>
      <Navbar />
      <TopNews news={news}/>
      <Footer />
    </Box>
  )
}

export default LandingPage