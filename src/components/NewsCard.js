import React from 'react'
import {
    Button, Grid, Paper, Typography, Stack, Skeleton
} from '@mui/material'

import { deepPurple } from '@mui/material/colors'

const NewsCard = ({item}) => {
  return (
    <Paper sx={{ width: '100%', p: 2, mb: 2 }}>
            <Grid container>
              <Grid item md={4} xs={12}>
                {(item.urlToImage === null) 
                    ? <Skeleton sx={{borderRadius: '5px'}} variant="rectangular" width={'100%'} height={200} />
                    : <img style={{ width: '100%', borderRadius: '5px', border: '1px solid black' }} src={item.urlToImage} />}
              </Grid>
              <Grid sx={{pl: {md: 2, xs: 0}}} item md={8} xs={12}>
                <Typography variant='h5' sx={{
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  display: '-webkit-box',
                  WebkitLineClamp: '1',
                  WebkitBoxOrient: 'vertical',
                }}>{item.title}</Typography>

                <Stack sx={{mt: 1}} direction={{md: 'row', xs: 'column'}} justifyContent={{md: 'space-between', xs: 'flex-start'}}>
                  <Typography sx={{bgcolor: deepPurple[400], width: 'fit-content', p: 1, pt: 0.3, pb: 0.3, color: 'white', borderRadius: '5px'}}>{item.source.name}</Typography>
                  <Typography sx={{color: deepPurple[400], mt: {xs: 2, md: 0}}}>{`Author: ${item.author}`}</Typography>
                </Stack>

                <Typography sx={{
                  mt: 2,
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  display: '-webkit-box',
                  WebkitLineClamp: '3',
                  WebkitBoxOrient: 'vertical',
                }}>{item.content}</Typography>
              
                <Stack sx={{mt: 2}} direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                  <Typography sx={{color: deepPurple[400]}}>{`Published at: ${item.publishedAt.substring(0,10)}`}</Typography>
                  <a href={item.url}><Button variant='outlined'>Read More</Button></a>
                </Stack>
              </Grid>
            </Grid>
          </Paper>
  )
}

export default NewsCard