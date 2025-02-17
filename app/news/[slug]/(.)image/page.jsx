import { notFound } from "next/navigation"
import { DUMMY_NEWS } from "@/News"

export default async function InterceptImagePage({ params }) {
    const newsItemSlug = params?.slug
    const newsItem = DUMMY_NEWS.find(newsItem => newsItem.slug === newsItemSlug)

    if (!newsItemSlug) {
        notFound()
    }

    return (
        <>
            <h2>Intercepted Route!</h2>
            <div>
                <img src={`/images/${newsItem.image}`} alt={newsItem.title} />
            </div>
        </>

    )
}