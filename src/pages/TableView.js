import * as React from 'react';

import {
  Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper
} from '@mui/material'

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function BasicTable({news}) {
  return (
    <>
      <Navbar />
      <Container sx={{mt: 3}}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell align="left">Headlines</TableCell>
                <TableCell align="right">Source</TableCell>
                <TableCell align="right">Author</TableCell>
                <TableCell align="right">Link</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {news?.map((row, i) => (
                <TableRow
                  key={i}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {i+1}
                  </TableCell>
                  <TableCell width={'100%'}>
                    <Typography sx={{fontWeight: 600}}>{row.title}</Typography>
                  </TableCell>
                  <TableCell align="right">{row.source.name}</TableCell>
                  <TableCell align="right">{row.author}</TableCell>
                  <TableCell align="right">
                    <a href={row.url}><Typography sx={{color: 'blue'}}>Read</Typography></a>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
      <Footer />
    </>
  );
}
