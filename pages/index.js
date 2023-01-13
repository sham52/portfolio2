import Head from 'next/head'
import Image from 'next/image'
// import { Inter } from '@next/font/google'
import Navbar from '../components/navbar'
import Main from '../components/main';
import About from '../components/about'
import Skills from '../components/skills'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Shamil | Jack Of All Trades</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Main />
      <About />
      <Skills />


    </>
  )
}
