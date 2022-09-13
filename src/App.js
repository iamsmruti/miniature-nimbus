import { ThemeProvider, createTheme } from '@mui/material'
import { deepPurple, red } from '@mui/material/colors';
import { useEffect, useState } from 'react';

import { BrowserRouter as Router, Routes, Route, Redirect } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Register from './pages/Register';
import TableView from './pages/TableView';

import axios from 'axios'

const theme = createTheme({
  palette: {
    primary: deepPurple,
    secondary: red
  },
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700
  }
})

const App = () => {
  const [news, setNews] = useState(undefined)
  useEffect(() => {
    axios.get('https://newsapi.org/v2/top-headlines?country=in&apiKey=588c845fa0cb4675b07f78e0d0e1a0e3').then((res) => {
      console.log(res.data.articles)
      setNews(res.data.articles)
    })
  }, [])

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route exact path='/' element={<LandingPage news={news} />} />
            <Route exact path='/table-view' element={<TableView news={news} />} />
          </Route>
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/register' element={<Register />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;
