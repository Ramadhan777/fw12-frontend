import React from 'react'
import EmailBox from '../components/EmailBox'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import NavbarProfile from '../components/navbar/NavbarProfile'
import NowShowing from '../components/NowShowing'
import Upcoming from '../components/Upcoming'

const HomepageLogin = () => {
  return (
    <div>
        <NavbarProfile />
        <Hero />
        <NowShowing desc={true} />
        <Upcoming />
        <EmailBox />
        <Footer />
    </div>
  )
}

export default HomepageLogin