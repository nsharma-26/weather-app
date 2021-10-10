import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { Button } from '@mui/material';

class RadioBox extends React.Component  {
    
    render() {
        const { selected } = this.props.state;
              
        return (
            <div>
                <FormControl component="fieldset" name="temprature">                
                    <RadioGroup row aria-label="temp" onChange={this.props.handleChange} value={selected}>
                        <FormControlLabel value="celcius" control={<Radio />} label="Celcius" />
                        <FormControlLabel value="fahrenheit" control={<Radio />} label="Fahrenheit" />  
                        <Button variant="outlined" size="small" onClick={this.props.refresh}>Refresh</Button>                  
                    </RadioGroup>
                </FormControl>
            </div> 
        )
    }
}

export default RadioBox

