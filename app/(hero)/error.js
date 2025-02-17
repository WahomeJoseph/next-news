'use client'
export default function Error() {
    return (
        <div className="flex flex-col items-center justify-center mt-20">
            <h1 className="text-[4rem] font-bold text-red-600 mb-4">No Such Page Found!</h1>
            <p className="text-2xl text-gray-700">Ooops! Sorry, Try Something Else!</p>
        </div>
    )
}