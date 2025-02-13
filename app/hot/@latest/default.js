import NewsList from '@/components/NewsList'
import { getLatestNews } from '@/libs/tea'
import React from 'react'

export default function LatestNews() {
    const latest = getLatestNews()
  return (
    <>
        <h2>Latest News</h2>
        <NewsList news={latest}/>
    </>
  )
}
