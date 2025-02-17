import { DUMMY_NEWS } from '@/News'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import React from 'react'

export default function NewsPage({ params }) {
  const newsSlug = params?.slug
  const newsItem = DUMMY_NEWS.find(newsItem => newsItem.slug === newsSlug)

  if (!newsItem) {
    notFound()
  }

  return (
    <div className='flex justify-center items-center'>
      <article className="max-w-3xl mx-20 sm:mx-10 mt-14 p-6 bg-transparent shadow-[0px_20px_207px_10px_rgba(17,_42,_162,_0.32)] rounded-md">
        <header className="mb-4">
          <Link href={`/news/${newsItem.slug}/image`}>
            <img className="w-full h-64 object-cover rounded-t-md" src={`/images/${newsItem.image}`} alt={newsItem.title} />
          </Link>
          <h1 className="text-3xl font-bold mt-4">{newsItem.title}</h1>
          <span className='flex items-center space-x-6'>
            <time className="block text-gray-400 mt-2" dateTime={newsItem.date}>{newsItem.date}</time>
            <p className="block text-gray-400 mt-2" >author: <span className='italic'>{newsItem.author}</span></p>
          </span>
        </header>
        <span className="block text-gray-400 mb-4">News ID: {newsSlug}</span>
        <p className="text-gray-500 leading-relaxed">{newsItem.content}</p>
      </article>
    </div>

  )
}
