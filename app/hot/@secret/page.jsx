import React from 'react'
import Link from 'next/link'

import { getAvailableNewsYears } from '@/libs/tea'

export default function SecretNews() {
  const years = getAvailableNewsYears()

  return (
    <div>
        <h2>Classified Secret News</h2>
        <header id='archive-header'>
          <ul>
            {years.map((year) => (
              <li key={year}>
                <Link href={`/archive/${year}`}>{year}</Link>
              </li>
            ))}
          </ul>
        </header>
    </div>
  )
}
