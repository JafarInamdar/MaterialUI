import { Typography,Button,TextField, FormGroup, FormControlLabel, Checkbox, Modal, Autocomplete } from '@mui/material'
import './App.css';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import { Form } from './Form';
import Navbar from './Navbar';
import Cards from './Cards';
import RecipeReviewCard from './RecipeReviewCard';
import { ModalDemo } from './ModalDemo';
import Containers from './Containers';
import ListComponents from './ListComponents';
import AccordionComponent from './AccordionComponent';
import AutoCompleteComponent from './AutoCompletComponent';

function App() {
  return (
    <div>
      <Navbar />
      <Typography variant="h1" sx={{color:'red'}} component={"h2"}  style={{margin:"50px"}}>Spry Pepole</Typography>
      <h1>Material Ui </h1>
      <hr />
      <h1>Button</h1>
      
      <Button variant='contained' color='success' sx={{margin:'30px'}}>Click Me</Button>
      <Button variant='outlined' sx={{margin:'30px'}}>Click Me</Button>
      <Button variant='text' onClick={()=>alert("you Clicked text variant")} sx={{margin:'30px'}}>Click Me</Button>
      <Button variant='outlined' disabled sx={{margin:'30px'}}>disabled</Button>
      <Button variant='contained' size='large' sx={{margin:'30px'}}>size large</Button>
      <Button variant='contained' size='small' sx={{margin:'30px'}}>size small</Button>
      <Button variant='contained' size='medium' sx={{margin:'30px'}}>size medium</Button>

      <Button variant="outlined" color="error" sx={{margin:'30px'}}>Error</Button>

      <Button variant='contained' startIcon={<DeleteIcon />} sx={{margin:'30px'}}>Delete</Button>

      <Button variant="contained" endIcon={<SendIcon />} sx={{margin:'30px'}}>Send</Button>
       
      
      <br />
      <h1>Input Field :-TextField</h1>
      <TextField type='text' placeholder='Enter the Name' variant='standard' sx={{margin:"30px"}} />
      <TextField type='text' placeholder='Enter the Name' variant='outlined' sx={{margin:"30px"}} />
      <TextField type='text' placeholder='Enter the Name' variant='filled' sx={{margin:"30px"}} />

       <br></br>
       <Form />


       <br></br>

       <hr></hr>
       <h1 style={{marginLeft:130}}>Card</h1>

       <div style={{marginTop:100,margin:20}}>
          <Cards />
       </div>

       <hr />
       <div style={{marginTop:100,margin:20}}>
        <RecipeReviewCard />
       </div>


       <hr />
       <h1>Modal Demo</h1>
       <br />
       <ModalDemo />

       <br />
       <hr />
       <br />
       <br />
       <h1>Container Demo</h1>
       <br />
       <Containers />
       <br></br>
       <hr></hr>
       <br />
       <br />
       <h1>List Demo</h1>
       <br />
       <ListComponents />
       <br></br>
       <hr></hr>
       <br />
       <br />
       <h1>Accordion Demo</h1>
       <br />
       <AccordionComponent />

       <br />
       <hr></hr>
       <br />
       <h1>AutoComplet :- is work like select course using serch functionality</h1>
       <br />
      
       <AutoCompleteComponent />
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <br></br>

       <br />
       <br />
       <hr></hr>
      
       

    </div>
  );
}

export default App;
