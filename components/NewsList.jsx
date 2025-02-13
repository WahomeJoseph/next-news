import Link from 'next/link'

export default function NewsList({news}) {
    return (
        <div>
            <ul className="grid md:grid-cols-3 sm:grid-cols-2 gap-20 m-8 p-10">
                {news.map((newsItem) => (
                    <li key={newsItem.id} className="flex p-6 w-full h-full items-center border-t rounded-t border-[#f1f1f1] border-b rounded-b hover:border-b-[#f1f1f1] hover:shadow-[0px_20px_207px_10px_rgba(187,_163,_163,_0.54)]">
                        <Link href={`/news/${newsItem.slug}`} className="flex sm:flex-col sm:space-y-3 justify-center items-center space-x-4">
                            <img src={`/images/${newsItem.image}`} alt={newsItem.title} className="cover rounded-full" />
                            <span className="text-lg font-medium">{newsItem.title}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
