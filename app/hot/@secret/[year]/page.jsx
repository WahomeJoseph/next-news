import NewsList from '@/components/NewsList'
import { getNewsForYear } from '@/libs/tea'

export default function FilterNews({params}) {
  const newsYear = params.year
  const news = getNewsForYear(newsYear)
  return (
    <div>
        <NewsList news={news}/>
    </div>
  )
}
