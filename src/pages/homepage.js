import React from 'react'
import Header from '../components/header';
import HeroBanner from '../components/heroBanner';
// import Filter from '../components/filter';
import CardList from '../components/cardList';
import Footer from '../components/footer';


const homepage = () => {
  return (
    <>
    <Header/>
    <HeroBanner/>
    {/* <Filter/> */}
    <CardList/>
    <Footer/>
    </>
  )
}

export default homepage