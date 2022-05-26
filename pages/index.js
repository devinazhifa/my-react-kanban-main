import Head from 'next/head'
import React from 'react'
import List from '../Components/List'

const Home = () => {
  return (
    <>
    <Head>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,400;0,500;0,600;0,700;1,300&display=swap" rel="stylesheet"/>
    </Head>
    <div className='font-main w-full min-h-screen bg-[#F2F2FA] leading-5'>
      <div className='container mx-auto px-4 py-12'>
        <h1>My Kanban Board</h1>
        <List />
        {/* <List />
        <List />
        <List /> */}
      </div>
    </div>
    </>
  )
}

export default Home