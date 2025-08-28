import React from 'react'
import Banner from '../components/home/Banner'
import StorytellingPower from '../components/home/StorytellingPower'
import FeaturedStories from '../components/home/FeauturedStories'
import HowItWorks from '../components/home/HowItWorks'
import TransformativeImpact from '../components/home/TransformativeImpact'

const Home = () => {
  return (
    <>
     <Banner />
     <FeaturedStories />
     <StorytellingPower />
     <HowItWorks />
     <TransformativeImpact />
    </>
  )
}

export default Home
