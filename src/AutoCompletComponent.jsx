import { Autocomplete, TextField } from '@mui/material';
import React from 'react';

const AutoCompleteComponent = () => {
    const movies = ["Jawan", "Gaddar", "Sultan", "Dabang", "Baghi"];
  
    return (
        <div style={{marginLeft:"20%"}}>
            <Autocomplete 
                sx={{ width: 200}}
                options={movies}
                renderInput={(params) => (
                <TextField {...params} label='Select A Movie' />
    )}
            />
        </div>
    );
}

export default AutoCompleteComponent;
