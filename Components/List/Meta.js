import React from 'react'
import { useEffect, useState } from "react";
import axios from 'axios';

const Meta = () => {

  const [listData, setListData] = useState([])

  useEffect(() => {
    axios.get('/api'
    ).then ( res => {
      console.log(res)
      setListData([...res.data]);
    })
  }, []);

  // const fetchListData = async () => {
  //   const response = await fetch ('/api')
  //   const data = await response.json()
  //   setListData(data)
  // }

  // useEffect(() => {
  //   fetchListData()
  // },[])
  
  return (
    <div>
      {listData.map( (data) => {
        return (
          <div key={data.id} >
            <h1 className='font-semibold text-base mt-4 text-title px-3'> {data.title} </h1>
            <p className='text-base text-desc px-3 pb-8'> {data.description} </p>
          </div>
        )
      })}
    </div>
  )
}

export default Meta