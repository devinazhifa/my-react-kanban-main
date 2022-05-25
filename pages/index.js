import React from 'react'
import List from '../Components/List'

const Home = () => {
  return (
    <>
    <div className='bg-blue-50'>
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