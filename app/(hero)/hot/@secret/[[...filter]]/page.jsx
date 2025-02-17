import Link from 'next/link'
import { getAvailableNewsMonths, getAvailableNewsYears, getNewsForYear, getNewsForYearAndMonth } from '@/libs/tea'
import NewsList from '@/components/NewsList'

export default async function FilterNews({ params }) {
  const filter = await params.filter

  const selectedYear = filter?.[0]
  const selectedMonth = filter?.[1]
  let years = getAvailableNewsYears()

  let news
  if (selectedYear && !selectedMonth) {
    news = getNewsForYear(selectedYear)
    years = getAvailableNewsMonths(selectedYear)
  }
  if (selectedYear && selectedMonth) {
    news = getNewsForYearAndMonth(selectedYear, selectedMonth)
    years = []
  }
  let newsContent = <p className='text-red-600 tracking-wide'>No News Found For the Selected Period!</p>

  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />
  }

  if (
    (selectedYear && !getAvailableNewsYears().includes(+selectedYear)) ||
    (selectedMonth && !getAvailableNewsMonths(selectedYear).includes(+selectedMonth))
  ) {
    throw new Error('Invalid Path! Try Something Else!')
  }

  return (
    <>
      <h3>Secret Archive News</h3>
      <header id='archive-header'>
        <ul>
          {years.map((year) => {
            const href = selectedYear ? `/hot/${selectedYear}/${year}` : `/hot/${year}`
            return (
              <li key={year}>
                <Link href={`/hot/${year}`}>{year}</Link>
              </li>
            )
          })}
        </ul>
      </header>
      {newsContent}
    </>
  )
}
