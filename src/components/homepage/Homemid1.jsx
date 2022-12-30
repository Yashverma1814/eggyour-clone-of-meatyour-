import React from 'react'
import { Link } from 'react-router-dom'

export const Homemid1 = () => {
  return (
    <div>
        <div className='imageSec'>
            <div className='midHeading'>
                <div>BEST</div>
                <div>ODORLESS</div>
                <div>EGGS EVER!!!</div>
            </div>
            <div>
                <img className='midImage' src="https://cdn.shopify.com/s/files/1/0595/0449/2726/files/CHICKEN_503x.jpg?v=1640340350" alt="" />
            </div>
            <div className='subHeadingMid'>
                <div>OUR CHICKENS ARE ALLOWED TO ROAM AROUND , EAT</div>
                <div> GRASS , INSECTS FOR ADDITIONAL NUTRITION.RAISED</div>
                <div> HAPPILY AT THE FARM!</div>
                <div>
                    <Link to='/products'>
                        <button className='orderNowButton'>ORDER NOW!!!!</button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}
