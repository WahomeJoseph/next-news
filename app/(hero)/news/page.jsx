import { DUMMY_NEWS } from '@/News'
import NewsList from '@/components/NewsList'

export default function News() {
  return (
    <>
      <h4 className=" text-center text-3xl tracking-wide text-[#ddd6cb] font-montserrat font-bold mt-5">News Cards</h4>
      <NewsList news={DUMMY_NEWS} />
    </>
  )
}
