import { Box, Button, Link, Modal, Typography } from '@mui/material';
import React, { useState } from 'react';

export const ModalDemo = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box 
          position="absolute" 
          top="50%" 
          left="50%" 
          transform="translate(-50%, -50%)"
          bgcolor="background.paper"
          p={4}
          boxShadow={24}
        >
          <Typography>This is a Modal</Typography>
          <Button variant='contained' onClick={() => setOpen(false)}>Cancel</Button>
        </Box>
      </Modal>
      <br></br>
      <h1>Link demo</h1>
      <Link variant='h4' color="secondary"
       href='https://www.youtube.com/watch?v=CLUyW3TliuI&list=PLuHGmgpyHfRwE3FmGFXXOFU_gQQI_PJC1&index=14'
        underline='hover'>NavLink
      
      </Link>
    </div>
  );
};
