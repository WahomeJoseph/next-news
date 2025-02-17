'use client'
import NewsList from '@/components/NewsList'
import { useEffect, useState } from 'react'

export default function News() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState()
  const [news, setNews] = useState()

  useEffect(() => {
    async function fetchNews() {
      setIsLoading(true)
      const result = await fetch('http://localhost:8080/news')
      const data = await result.json()

      setIsLoading(false)
      setNews(data)

      if (!result.ok) {
        setError('Failed To Fetch News!')
        setIsLoading(false)
      }
    }
    fetchNews()
  }, [])

  { isLoading && <p>Loading...</p> }

  if (error) {
    return <p>{error}</p>
  }

  let newsContent
  if (news) {
    newsContent = <NewsList news={news} />
  }
  return (
    <>
      <h2 className=" text-center text-3xl tracking-wide text-[#ddd6cb] font-montserrat font-bold mt-5">News Cards</h2>
      {newsContent}
    </>
  )
}
