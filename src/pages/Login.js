import * as React from 'react';

import {
    Avatar, Button, CssBaseline, TextField, Link, Grid, Box, Typography, Container
} from '@mui/material'

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import { useNavigate } from 'react-router-dom'
import { notifyError, notifySuccess } from '../components/Notifiers';
import { ToastContainer } from 'react-toastify'

import axios from 'axios';
import { blue, deepPurple } from '@mui/material/colors';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://github.com/iamsmruti">
                SmrutiFY
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default function SignIn() {
    const navigate = useNavigate()
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        axios.post('https://mechfuse.herokuapp.com/auth/login', {
            email: data.get('email'),
            password: data.get('password'),
        }).then((res) => {
            console.log(res)
            notifySuccess('Login Successfull')
            localStorage.setItem('token', res.data)
            localStorage.setItem('isLoggedIn', true)
            navigate('/')
        }).catch((err) => {
            notifyError(err.message)
            console.log(err)
        })
    };

    return (
        <Container sx={{height: '100vh', display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center'}} component="main" maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item>
                            <Link href="#" variant="body2">
                                <a style={{color: deepPurple[400]}} href='/register'>
                                    Don't have an account? Sign Up
                                </a>
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <Copyright sx={{ mt: 8, mb: 4 }} />
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </Container>
    );
}