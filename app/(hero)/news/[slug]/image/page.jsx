import { getNewsItem } from "@/libs/tea"
import { notFound } from "next/navigation"

export default async function ImagePage({params}){
    const newsItemSlug = params?.slug
      const newsItem = await getNewsItem(newsItemSlug)
    
      if (!newsItemSlug) {
        notFound()
      }

    return(
        <div>
            <img src={`/images/${newsItem.image}`} alt={newsItem.title} />
        </div>
    )
}