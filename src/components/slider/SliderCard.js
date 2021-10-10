import React from 'react'
import { Card, CardContent, Typography, IconButton } from '@mui/material';
import { faCloudShowersHeavy, faCloudSun } from "@fortawesome/free-solid-svg-icons";
import { faCloudversify } from '@fortawesome/free-brands-svg-icons' 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function SliderCard({...props}) {
    return ( 
                                                                                   
        <div>
            <Card sx={{ maxWidth: `${props.mobileWidth}` == 375? 500 : 300}}>
                <div onClick={props.handleBarClick}>
                <CardContent>
                    <Typography sx={{ fontSize: 14}}>
                    Temperature                   
                    </Typography>
                    <span style={{ fontSize: 16, fontWeight: 'normal', marginRight: '20px'}}> 
                        {props.selected == 'celcius' ? `${props.temp}C` : `${props.temp}F`}
                    </span>
                    <IconButton aria-label="add to favorites">
                    {
                        props.weather === 'Clouds' ? <FontAwesomeIcon icon={faCloudversify} /> :
                        props.weather === 'Rain' ? <FontAwesomeIcon icon={faCloudShowersHeavy} /> :
                        props.weather === 'Clear' ? <FontAwesomeIcon icon={faCloudSun} /> :
                        <FontAwesomeIcon icon={faCloudShowersHeavy} />

                    } 
                    </IconButton> 
                    <Typography>
                        {props.date}                  
                    </Typography>
                </CardContent>
            </div>
            </Card>
        </div>
    )
}

export default SliderCard

