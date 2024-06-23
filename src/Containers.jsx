import { Container, Typography } from '@mui/material'
import React from 'react'

const Containers = () => {
  return (
    <>
        <Container sx={{background:'yellow'}} maxWidth="xs">
            <Typography variant='body2'>
                This is xs
            </Typography>
        </Container>
        <br />

        <Container sx={{background:'yellow'}} maxWidth="sm">
            <Typography variant='body2'>
                This is sm
            </Typography>
        </Container>
        <br />

        <Container sx={{background:'yellow'}} maxWidth="md">
            <Typography variant='body2'>
                This is md
            </Typography>
        </Container>
        <br />

        <Container sx={{background:'yellow'}} maxWidth="lg">
            <Typography variant='body2'>
                This is lg
            </Typography>
        </Container>
         <br />
        <Container sx={{background:'yellow'}} maxWidth="xl">
            <Typography variant='body2'>
                This is xl
            </Typography>
        </Container>
    </>
  )
}

export default Containers