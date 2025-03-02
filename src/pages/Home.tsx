import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Rewards from '../Components/Rewards'
import Challenges from '../Components/Challenges'
import Guide from '../Components/Guide'
import Completed from '../Components/Completed'
import Subscribe from '../Components/Subscribe'
import Footer from '../Components/Footer'
import Mentors from '../Components/Mentors'

const Home = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <Rewards />
    <Challenges />
    <Guide />
    <Completed />
    <Mentors />
    <Subscribe />
    <Footer />
    </>
  )
}

export default Home