import React from 'react'
import Header from './Header'
import Separator from './Separator'
import Card from '../Card/index'

const List = () => {
  return (
    <>
        <Header />
        <Separator />
        <Card>Card Content</Card>
        <Card>Card Content</Card>
    </>
  )
}

export default List