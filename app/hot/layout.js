import React from 'react'

export default function HotLayout({ latest, secret }) {
  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-4">Hottest Tea</h1>
      <section id='archive-filter' className="p-2 rounded">{secret}</section>
      <section id='archive-filter' className="mb-4 p-2 rounded">{latest}</section>
    </div>
  )
}
