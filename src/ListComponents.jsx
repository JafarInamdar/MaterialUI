import { List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import React from 'react'

const ListComponents = () => {
    const courses=['react','java', 'mern','nodejs']
  return (
    <div>
        <List sx={{background:'gray',width:250}}>
            {courses.map(course =>(

              <ListItem>
              <ListItemButton>{'>'}</ListItemButton>
              <ListItemText primary={course} />
          </ListItem>

            ))}
           
        </List>
    </div>
  )
}

export default ListComponents