import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {v4 as uuid} from 'uuid';
import { addItem } from '../../redux/Cart/action';


export const OrderComponent = () => {
  const dispatch = useDispatch();
  const options = ['30 Eggs-Rs 329 Most Ordered', `24 Eggs-Rs 290`, `12 Eggs-Rs 160`,`60 Eggs-Rs 600`, `90 Eggs-Rs 879`];
  const [quan,setQuan] = useState('30');
  const globalState = useSelector((state)=>state);
  const optionHandler = (e) =>{
    let val = e.target.value;
    val = val.split('-');
    let subVal = val[0];
    subVal = subVal.split(' ');
    setQuan(subVal[0]);
  }
  const handleAdd = () =>{
    const payload = {
      quan,
      id:uuid()
    };
    dispatch(addItem(payload));
  }
  return (
    <div style={{marginLeft:'20%',marginTop:'5rem'}}>
        <div className='orderPageGrid'>
          <div>
              <div className='productHeading'>
                  <div>ODORLESS (NO <br /> SMELL) BROWN EGGS</div>
              </div>
              <div className='price'>PRICE</div>
              <div className='cod'>CASH ON DELIVERY AVAILABLE</div>
              <div className='quanSetter'><span className='quan'>QUANTITY</span>
              <span>
                <select name="" id="" onChange={optionHandler} className='option'>
                  {options.map((option,index)=>{
                    return <option key={index}>
                      {option}
                    </option>
                  })}
                </select>
              </span>
              </div>
              <div>
                <button className='addToCart' onClick={handleAdd}>Add To Cart</button>
              </div>
              <div>
              <Link to='/cart'>
                <button className='buyNow' onClick={handleAdd}>Buy It Now</button>
              </Link>
              </div>
              
          </div>
          <div>
            <img src="https://cdn.shopify.com/s/files/1/0595/0449/2726/products/MEATYOUR_7_503x.png?v=1640575967" alt="" />
          </div>
        </div>
    </div>
  )
}
