import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@mui/material'
import React, { useState } from 'react'

const Cards = () => {
    const [open,setOpen]=useState(false)
  return (
    <div style={{display:'flex',flexWrap:'wrap',gap:'40px',justifyContent:'center'}}>
        <Card sx={{maxWidth:300}}>
          <CardMedia component={'img'} 
          image='/images/dryfruit.jpg' 
          alt="test image" />
          <CardContent>
            <Typography gutterBottom variant='h5' component="div">
               Web Design
            </Typography>
            <Typography variant='body2'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Accusamus dolores voluptas fugiat aliquam omnis inventore, 
                maiores aspernatur eum perspiciatis,
                modi libero deserunt ex ratione dicta quasi. Voluptate ab culpa suscipit?
            </Typography>
          </CardContent>
          <CardActions>
            <Button size='small' color='primary'>Share</Button>
            <Button size='small' color='primary' onClick={()=>setOpen(true)}>Delete</Button>

          </CardActions>
        </Card>
        <Card sx={{maxWidth:300}}>
          <CardMedia component={'img'} 
          image='/images/dryfruit.jpg' 
          alt="test image" />
          <CardContent>
            <Typography gutterBottom variant='h5' component="div">
               Web Design
            </Typography>
            <Typography variant='body2'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Accusamus dolores voluptas fugiat aliquam omnis inventore, 
                maiores aspernatur eum perspiciatis,
                modi libero deserunt ex ratione dicta quasi. Voluptate ab culpa suscipit?
            </Typography>
          </CardContent>
          <CardActions>
            <Button size='small' color='primary'>Share</Button>
            <Button size='small' color='primary'>Delete</Button>
          </CardActions>
        </Card>
        <Card sx={{maxWidth:300}}>
          <CardMedia component={'img'} 
          image='/images/dryfruit.jpg' 
          alt="test image" />
          <CardContent>
            <Typography gutterBottom variant='h5' component="div">
               Web Design
            </Typography>
            <Typography variant='body2'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Accusamus dolores voluptas fugiat aliquam omnis inventore, 
                maiores aspernatur eum perspiciatis,
                modi libero deserunt ex ratione dicta quasi. Voluptate ab culpa suscipit?
            </Typography>
          </CardContent>
          <CardActions>
            <Button size='small' color='primary'>Share</Button>
            <Button size='small' color='primary'>Delete</Button>
          </CardActions>
        </Card><Card sx={{maxWidth:300}}>
          <CardMedia component={'img'} 
          image='/images/dryfruit.jpg' 
          alt="test image" />
          <CardContent>
            <Typography gutterBottom variant='h5' component="div">
               Web Design
            </Typography>
            <Typography variant='body2'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Accusamus dolores voluptas fugiat aliquam omnis inventore, 
                maiores aspernatur eum perspiciatis,
                modi libero deserunt ex ratione dicta quasi. Voluptate ab culpa suscipit?
            </Typography>
          </CardContent>
          <CardActions>
            <div style={{marginLeft:'20%'}}>
            <Button size='small' color='primary'>Share</Button>
            <Button size='small' color='primary'>Delete</Button>
            </div>
          </CardActions>
        </Card>
        <Card sx={{maxWidth:300}}>
          <CardMedia component={'img'} 
          image='/images/dryfruit.jpg' 
          alt="test image" />
          <CardContent>
            <Typography gutterBottom variant='h5' component="div">
               Web Design
            </Typography>
            <Typography variant='body2'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Accusamus dolores voluptas fugiat aliquam omnis inventore, 
                maiores aspernatur eum perspiciatis,
                modi libero deserunt ex ratione dicta quasi. Voluptate ab culpa suscipit?
            </Typography>
          </CardContent>
          <CardActions>
            <div style={{marginLeft:'20%'}}>
            <Button size='small' color='primary'>Share</Button>
            <Button size='small' color='primary'>Delete</Button>
            </div>
          </CardActions>
        </Card>

        <Dialog open={open} onClose={()=>{setOpen(false)}}>
            <DialogTitle>Are You Sure</DialogTitle>
            <DialogContent>Are You Show to delete this Product ?</DialogContent>
            <DialogActions>
                <Button onClick={()=>setOpen(false)}>cancel</Button>
                <Button>Delete</Button>
            </DialogActions>

        </Dialog>
    </div>
  )
}

export default Cards