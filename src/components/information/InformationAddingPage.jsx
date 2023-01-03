import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export const InformationAddingPage = () => {
  return (
    <div style={{paddingLeft:'25%'}}>
        <div>
            <div className='company' style={{color:'black',marginLeft:'0px'}}>EGGYOUR</div>
            <div className='source' style={{color:'black',marginLeft:'0px'}}>BY YASH VERMA</div>
        </div>
        <div>
          <div className='contInfo' style={{paddingBottom:'1rem'}}>Contact information</div>
          <TextField id="outlined-basic" label="Email or mobile phone number" variant="outlined" style={{width:'70%',paddingBottom:'2rem'}}/>
        </div>
        <div>
          <div className='contInfo' style={{paddingBottom:'1rem'}}>Shipping Address</div>
          <div style={{paddingBottom:'1rem',display:'grid',gridTemplateColumns:'repeat(2,1fr)',width:'70%'}}>
            <TextField id="outlined-basic" label="First name" variant="outlined" />
            <TextField id="outlined-basic" label="Last name" variant="outlined" />
          </div>
          <div style={{paddingBottom:'1rem'}}> 
            <TextField id="outlined-basic" label="Address" variant="outlined" style={{width:'70%'}}/>
          </div>
          <div style={{paddingBottom:'1rem'}}>
            <TextField id="outlined-basic" label="City" variant="outlined" />
          </div>
          <div>
            <Link to='/thanks'>
              <Button variant="contained" style={{color:'white',backgroundColor:'brown  '}}>place Order</Button>
            </Link>
          </div>
        </div>
    </div>
  )
}
