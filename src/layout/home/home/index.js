import React, { useEffect, useState } from 'react'
import BookApi from '../../../api/book'
import { Book } from '../../../example/book'
import { Cover } from '../../../example/cover'
import { News } from '../../../example/news'

export const HomePage = () => {
  const [data, setData] = useState([])
  const [dataMybook, setDataMyBook] = useState([])

  const getAllBook = async () => {
    const result = await BookApi.getBookTop4New()
    setData(result)
  }

  useEffect(() => {
    getAllBook()
  }, [])

  return (
    <>
      <Cover />
      <News />
      <Book title="New Book" data={data} />
      <Book title="My Book" data={dataMybook} />
    </>
  )
}
