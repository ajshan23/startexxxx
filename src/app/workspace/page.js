import React from 'react'
import WorkBanner from './WorkBanner'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Logo from '../home/Logo'
import OfficeSpaces from './OfficeSpaces'
import Benafits from './Benafits'

function page() {
  return (
    <div>
        
        <WorkBanner />
        <Logo />
        <OfficeSpaces />
        <Benafits />
        
    </div>
  )
}

export default page