import React from 'react'
import { DeliveryNav } from '../components/homepage/DeliveryNav'
import { Homemid1 } from '../components/homepage/Homemid1'
import { Homemid2 } from '../components/homepage/Homemid2'
import { NavBar } from '../components/homepage/NavBar'

export const HomePage = () => {
  return (
    <div>
        <DeliveryNav />
        <NavBar />
        <Homemid1 />
        <Homemid2 />
    </div>
  )
}
