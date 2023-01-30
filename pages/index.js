import Head from "next/head";
// import Image from 'next/Image'
// import { Inter } from '@next/font/google'
import Navbar from "../components/navbar";
import Main from "../components/main";
import About from "../components/about";
import Skills from "../components/skills";
import Projects from "../components/projects";
import Contact from "../components/contact";
import Gate from "../components/gate";

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Shamil | Jack Of All Trades</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/favicon.ico" />
      </Head>
      <Navbar />
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Gate/>
    </>
  );
}
