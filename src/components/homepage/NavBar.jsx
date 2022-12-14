import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


export const NavBar = () => {
  
  
  const globalState = useSelector((state)=>state);
  return (
    <div className='nav'>
        <div>
            <div className='company'>EGGYOUR</div>
            <div className='source'>BY YASH VERMA</div>
        </div>
        <div className='navOptions'>
            <div className='options'>
                <SearchIcon style={{fontSize:'2rem'}} className='searchIcon'/>
                <Link to='/cart'>
                  <ShoppingCartOutlinedIcon style={{fontSize:'2rem', color:'brown'}} className='cartIcon'/>
                </Link>
                  <a  style={{color:'brown'}}>({globalState.counter})</a>
                <MenuIcon style={{fontSize:'2rem'}} className='menuIcon'/>
            </div>
        </div>
    </div>
  )
}
