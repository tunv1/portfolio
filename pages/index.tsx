import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import Menu from '../components/layout'
import { About, Home } from '../modules'
import styles from '../styles/Home.module.css'

const portfolio = () => {
  return (
    <React.Fragment>
      <Home />
      <About />
    </React.Fragment>
  )
}

export default portfolio
