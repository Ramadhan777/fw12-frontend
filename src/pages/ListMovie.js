import React from 'react'
import Footer from '../components/Footer'
import ListMovieBody from '../components/ListMovieBody'
import NavbarProfile from '../components/navbar/NavbarProfile'

const ListMovie = () => {
  return (
    <>
        <NavbarProfile/>
        <ListMovieBody />
        <Footer />
    </>
  )
}

export default ListMovie
