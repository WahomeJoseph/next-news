'use client'

export default function FilterError({error}) {
    return (
        <div className="flex flex-col justify-center p-4 items-center justify-center mt-2">
            <h1 className="text-[2rem] font-bold text-red-600">No Such Filter Found!</h1>
            <p className="text-2xl text-gray-500">{error.message}</p>
        </div>
    )
}