import React from 'react'
import Avatar from './Avatar'
import Header from './Header'
import TagList from './TagList'

const Card = ({ children }) => {
  return (
      <>
        <Header />
        {children}
        <TagList />
        <Avatar />
      </>
  )
}

export default Card