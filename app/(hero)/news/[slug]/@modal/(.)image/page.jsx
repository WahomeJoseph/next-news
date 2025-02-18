import { getNewsItem } from "@/libs/tea"
import { notFound } from "next/navigation"
import Modal from "@/components/Modal"

export default async function InterceptImagePage({ params }) {
    const newsItemSlug = params?.slug
    const newsItem = await getNewsItem(newsItemSlug)

    if (!newsItemSlug) {
        notFound()
    }

    return (
        <>
            <Modal />
            <dialog className="modal" open>
                <div className="fullscreen-image">
                    <img src={`/images/${newsItem.image}`} alt={newsItem.title} />
                </div>
            </dialog>
        </>

    )
}