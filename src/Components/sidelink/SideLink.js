import React from 'react';
import { Link } from 'react-router-dom';

import FacebookIcon from '@material-ui/icons/Facebook';

import './SideLink.css'
const SideLink = () => {
    return (
  
        <div className='sideber '>
          
           <ul className='list__items'>
           <Link to='/'><FacebookIcon /> Link-1 </Link> 
           <Link to='/'><FacebookIcon /> Link-1 </Link> 
           <Link to='/'><FacebookIcon /> Link-1 </Link> 
           <Link to='/'><FacebookIcon /> Link-1 </Link> 
              
            </ul> 
           
        </div>

      
    );
};

export default SideLink;