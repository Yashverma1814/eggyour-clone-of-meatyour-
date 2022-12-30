import React from 'react'
import { ProductCard } from '../components/cartpage/ProductCard'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const CartPage = () => {

  const globalState = useSelector((state)=>state);
  console.log(globalState);
  const products = globalState.items
  return (
    <div>
        <div>
            <div className='cartNav'>
              <div><ArrowBackIcon className='backIcon'/></div>
              <div className='cartHeading'>CONTINUE SHOPPING</div>
            </div>
            <hr className='partition'/>
            <div className='allCards'>
              <div>
                {products.map((el)=>{
                  return <div key={el.id}><ProductCard item={el}/></div>
                })}
              </div>
            </div>
            <hr className='partition'/>
            <div className='subTotalMain'>
              <div className='subTotal'>SUBTOTAL</div>
              <div className='totalPayment'>Rs. {globalState.bill}</div>
            </div>
            <div className='taxes'>
              Taxes and shipping calculated at checkout
            </div>
            <Link to='/information'>
              <div style={{textAlign:'center',marginTop:'2rem'}}>
                <button className='checkOut'>Check Out</button>
              </div>
            </Link>
        </div>
    </div>
  )
}
