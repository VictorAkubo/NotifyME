import React from 'react'
import FirstSection from './FirstSection'
import SecondSection from './SecondSection'
import ThirdSection from './ThirdSection'
import FourthSection from './FourthSection'
import FifthSection from './FifthSection'

const FeatureSection = () => {
  return (
    <div className='max-w-[1080px] w-full mb-16 border border-gallery'>
        <FirstSection/>
        <SecondSection/>
        <ThirdSection/>
        <FourthSection/>
        <FifthSection/>
    </div>
  )
}

export default FeatureSection