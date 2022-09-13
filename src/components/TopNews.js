import React from 'react'
import {
  Box, Container, Divider, Typography
} from '@mui/material'

import NewsCard from '../components/NewsCard'

const TopNews = ({news}) => {
  return (
    <Box>
        <Container>
        <Typography sx={{ fontSize: 30, fontWeight: 600, mt: 2, mb: 1 }}>Top Headlines</Typography>
        <Divider />
        <Box sx={{ mt: 2 }}>
          {news?.map((item) => (
            <NewsCard item={item}/>
          ))}
        </Box>
      </Container>
    </Box>
  )
}

export default TopNews