// server side data fetching
import NewsList from '@/components/NewsList'
import { getAllNews } from '@/libs/tea'

export default async function News() {
  const news = getAllNews()

  return (
    <>
      <h2 className=" text-center text-3xl tracking-wide text-[#ddd6cb] font-montserrat font-bold mt-5">News Cards</h2>
      <NewsList news={news} />
    </>
  )
}
