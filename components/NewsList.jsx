import Link from 'next/link'

export default function NewsList({ news }) {
    return (
        <>
            <ul className="grid md:grid-cols-3 sm:grid-cols-2 sm:gap-10 sm:mx-0 sm:mt-6 md:gap-20 md:m-8 md:p-10">
                {news.map((newsItem) => (
                    <li key={newsItem.id} className="flex sm:p-4 md:p-6 w-full h-full items-center border-t rounded-t border-[#f1f1f1] border-b rounded-b hover:border-b-[#f1f1f1] hover:shadow-[0px_20px_207px_10px_rgba(187,_163,_163,_0.54)]">
                        <Link href={`/news/${newsItem.slug}`} className="flex sm:flex-col sm:space-y-3 justify-center items-center space-x-4">
                            <img src={`/images/${newsItem.image}`} alt={newsItem.title} className="cover rounded-full" />
                            <span className="text-lg font-medium">{newsItem.title}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    )
}
