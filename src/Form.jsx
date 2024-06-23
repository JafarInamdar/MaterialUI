import React,{useState} from 'react'
import { TextField,Button, FormGroup, FormControl, FormControlLabel, Checkbox, InputLabel, Select, MenuItem, FormLabel, RadioGroup, Radio } from '@mui/material'

export const Form = () => {
    const [inputs,setInputs]=useState({
        name:'',
        email:'',
        password:'',
        terms:false,
        courses:'',
        gender:''
    })

    const hanlerChange=(e)=>{
       setInputs(prevState =>({
        ...prevState,
        [e.target.name]:[e.target.value]
       }))
    }

    const handlerSubmit=(e)=>{
        e.preventDefault();
        console.log(inputs);
    }
  return (
    <>
    <hr></hr>
    <h1>My Form Example</h1>
    <form onSubmit={handlerSubmit}>
        <TextField name='name' value={inputs.name} onChange={hanlerChange} type='text' variant='outlined' placeholder='Enter the name' sx={{margin:"20px"}}/>
        <br></br>
        <TextField name='email' value={inputs.email} onChange={hanlerChange} type='email' variant='outlined' placeholder='Enter the email' sx={{margin:"20px"}}/>
        <br></br>
        <TextField name='password' value={inputs.password} onChange={hanlerChange}  type='password' variant='outlined' placeholder='Enter the password' sx={{margin:"20px"}}/>

        <br />
        <FormGroup sx={{margin:"20px"}}>
            <FormControlLabel label="I agree Term And Condition" control={<Checkbox  onChange={()=>{setInputs(prevState =>({
                ...prevState,terms:!inputs.terms
            }))}}/>} />
        </FormGroup>

        <br />
   
       <h1  style={{ margin: '20px' }}>DropDown</h1>
       <FormControl fullWidth sx={{margin:'20px'}}>
        <InputLabel id="menu">Courses</InputLabel>
        <Select labelId='menu' id='menu-list' label="courses"
         value={inputs.courses} onChange={hanlerChange} name='courses'>
            <MenuItem value={'mongodb'}>MongoDB</MenuItem>
            <MenuItem value={'java'}>Java</MenuItem>
            <MenuItem value={'react'}>ReactJs</MenuItem>
            <MenuItem value={'python'}>Python</MenuItem>
            <MenuItem value={'php'}>PHP</MenuItem>

        </Select>

       </FormControl>
        <br />
        <hr />
        <h1>Radio Button</h1>
        <FormControl>
            <FormLabel>Gender</FormLabel>
            <RadioGroup name='gender' defaultValue={'male'} onChange={hanlerChange}>
                <FormControlLabel value={'male'} label="Male" control={<Radio />} />
                <FormControlLabel value={'female'} label="Female" control={<Radio />} />
                <FormControlLabel value={'other'} label="Other" control={<Radio />} />

            </RadioGroup>
        </FormControl>

        <br />

         <Button type='submit'>Submit</Button>
    </form>
    </>

   
  )
}
