import React, { useState } from 'react'
import Inventory_listview from './Inventory_listview'
import Home from './Home'

const InvertoryHome = () => {
  const [isHome, setIsHome] = useState(true)
  return isHome ? (
    <Home setIsHome={setIsHome} />
  ) : (
    <Inventory_listview setIsHome={setIsHome} />
  );
}

export default InvertoryHome