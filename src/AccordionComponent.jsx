import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import { dark } from '@mui/material/styles/createPalette'
import React from 'react'

const AccordionComponent = () => {
  return (
    <div style={{marginLeft:'30%'}}>
        <Accordion sx={{width:"50%"}}>
            <AccordionSummary expandIcon={'^'} sx={{backgroundColor:"gray"}}>
                <Typography variant='h5' color={"dark"}>
                    What Is Mern Stack
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Dolorum sint aspernatur maiores beatae recusandae autem 
                    itaque aliquid ipsa provident, hic obcaecati veniam possimus
                    quis perspiciatis fugiat dolore sit eius sed!
                </Typography>
            </AccordionDetails>
        </Accordion>
    </div>
  )
}

export default AccordionComponent