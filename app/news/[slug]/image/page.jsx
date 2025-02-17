import { notFound } from "next/navigation"
import { DUMMY_NEWS } from "@/News"

export default function ImagePage({params}){
    const newsItemSlug = params.slug
      const newsItem = DUMMY_NEWS.find(newsItem => newsItem.slug === newsItemSlug)
    
      if (!newsItemSlug) {
        notFound()
      }

    return(
        <div>
            <img src={`/images/${newsItem.image}`} alt={newsItem.title} />
        </div>
    )
}