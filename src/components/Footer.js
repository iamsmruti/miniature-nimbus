import React from 'react'

import {
    Box, Typography, Divider, IconButton, Stack
} from '@mui/material'

import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  return (
    <Box sx={{mt: 3}}>
        <Divider />
        <Box sx={{display: 'flex', justifyContent: 'center', mt: 2}}>
            <IconButton href='https://github.com/iamsmruti'>
                <GitHubIcon />
            </IconButton>
            <IconButton href="https://www.linkedin.com/in/iamsmruti/">
                <LinkedInIcon />
            </IconButton>
            <IconButton href='https://www.instagram.com/__iamsmruti/'>
                <InstagramIcon />
            </IconButton>
        </Box>
        <Stack direction={'row'} alignContent={'center'} justifyContent={'center'}>
            <Typography sx={{p: 1, display: 'inline-block'}} align='center'>Made with 💜 By Smruti</Typography>
        </Stack>
    </Box>
  )
}

export default Footer