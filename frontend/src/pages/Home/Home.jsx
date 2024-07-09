import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'
import PromoDisplay from '../../components/PromoDisplay/PromoDisplay'

const Home = () => {

  const [category, setCategory] = useState("All")

  return (
    <>
      <Header />
      <ExploreMenu setCategory={setCategory} category={category} />
      <FoodDisplay category={category} />
      <PromoDisplay />
      <AppDownload />
    </>
  )
}

export default Home
