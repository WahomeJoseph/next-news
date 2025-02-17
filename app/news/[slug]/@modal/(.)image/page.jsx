'use client'
import { notFound, useRouter } from "next/navigation"
import { DUMMY_NEWS } from "@/News"

export default function InterceptImagePage({ params }) {
    const router = useRouter()

    const newsItemSlug = params?.slug
    const newsItem = DUMMY_NEWS.find(newsItem => newsItem.slug === newsItemSlug)

    if (!newsItemSlug) {
        notFound()
    }

    return (
        <>
            <div className="modal-backdrop" onClick={router.back}/>
            <dialog className="modal" open>
                <div>
                    <img src={`/images/${newsItem.image}`} alt={newsItem.title} />
                </div>
            </dialog>
        </>

    )
}