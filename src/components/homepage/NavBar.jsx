import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import { useSelector } from 'react-redux';


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
                <ShoppingCartOutlinedIcon style={{fontSize:'2rem'}} className='cartIcon'/>
                <a>({globalState.counter})</a>
                <MenuIcon style={{fontSize:'2rem'}} className='menuIcon'/>
            </div>
        </div>
    </div>
  )
}
