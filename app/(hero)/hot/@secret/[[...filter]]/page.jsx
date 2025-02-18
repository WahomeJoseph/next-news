import { Suspense } from 'react'
import Link from 'next/link'
import { getAvailableNewsMonths, getAvailableNewsYears, getNewsForYear, getNewsForYearAndMonth } from '@/libs/tea'
import NewsList from '@/components/NewsList'

// granular suspense for header
async function FilterHeader({ year, month }) {
  const availableYears = await getAvailableNewsYears()
  let years = availableYears

  if (
    (year && !availableYears.includes(year)) ||
    (month && !getAvailableNewsMonths(year).includes(month))
  ) {
    throw new Error('Invalid Path! Try Something Else!')
  }

  if (year && !month) {
    years = getAvailableNewsMonths(year)
  }
  if (year && month) {
    years = []
  }
  return (
    <header id='archive-header'>
      <ul>
        {years.map((year) => {
          const href = year ? `/hot/${year}/${year}` : `/hot/${year}`
          return (
            <li key={year}>
              <Link href={`/hot/${year}`}>{year}</Link>
            </li>
          )
        })}
      </ul>
    </header>
  )
}

// component for the granular suspense
async function FilteredNews({ year, month }) {
  let news

  if (year && !month) {
    news = await getNewsForYear(year)
  } else if (year && month) {
    news = await getNewsForYearAndMonth(year, month)
  }
  let newsContent = <p className='text-red-300 tracking-wide'>No news period had been selected!</p>

  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />
  }
  return newsContent
}

export default async function FilterNews({ params }) {
  const filter = params?.filter
  const selectedYear = filter?.[0]
  const selectedMonth = filter?.[1]

  return (
    <>
      <Suspense fallback={<p className='animate-bounce'>Loading news...</p>}>
        <FilterHeader year={selectedYear} month={selectedMonth} />
        <FilteredNews year={selectedYear} month={selectedMonth} />
      </Suspense>
    </>
  )
}
