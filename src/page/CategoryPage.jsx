import React, { useContext } from 'react'
import {  PortalDetail, PortalEventsDetail } from '../Detail/PortalDetail'
import { Card } from '../components/Slider'
import WrapperContainer from '../components/WrapperContainer'
import SearchEvents from '../components/SearchEvents'
import { Link } from 'react-router-dom'
import Contex from '../contextApi/Contex'

const CategoryPage = () => {

  const {Room, Guest, PriceRange} = useContext(Contex)

  let detail = PortalEventsDetail
  
 

  return (
    <div className="bg-[#d27548]">
      <WrapperContainer>
      <SearchEvents />
      <div id="showcase-Section" className="flex flex-wrap flex-col md:flex-row justify-between items-center pt-8">
        {detail.map(detail => (
        <Link to={`/SinglePortalView/${detail.id}`}><Card detail={detail} key={detail.id}/></Link>
        ) )}
      </div>
      </WrapperContainer>
    </div>
  )
}

export default CategoryPage;
