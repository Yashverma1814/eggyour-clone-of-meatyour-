import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteItem } from '../../redux/Cart/action';
export const ProductCard = ({item}) => {
  console.log(item);
  var price;
  if(item.quan=='30'){
    price='329';
  }
  else if(item.quan=='24'){
    price='290';
  }
  else if(item.quan=='12'){
    price='160';
  }
  else if(item.quan=='60'){
    price='599';
  }
  else if(item.quan=='90'){
    price='879';
  }
  const dispatch = useDispatch();

  const handleRemove = () =>{
    dispatch(deleteItem(item.id));
  }


  return (
    <div>
        <div>
            <div className='productCard'>
                <div>ODORLESS(NO SMELL) BROWN EGGS - {item.quan} Eggs - Rs.{price}</div>
                <div><img src="https://cdn.shopify.com/s/files/1/0595/0449/2726/products/MEATYOUR_7_67x.png?v=1640575967" alt="" /></div>
            </div>
            <div className='removeButtonDiv'>

              <button className='removeButton' onClick={handleRemove}>Remove</button>
            </div>
        </div>
    </div>
  )
}
