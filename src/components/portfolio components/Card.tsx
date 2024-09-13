import React from 'react'

interface Data {
    position: string,
    company: string,
    date: string,
    points: string[]
}

export default function Card({ data }: { data: Data }) {
    return (
        <div className='w-full border-2 p-4 rounded-2xl' >
            <h1 className='font-semibold text-xl' >{data.position}</h1>
            <div className='flex justify-between items-center ' >
                <h3 className='text-lg font-semibold' >{data.company}</h3>
                <p className='text-sm'>{data.date}</p>
            </div>
            <ol className='ml-5 list-disc ' >
                {
                    data.points.map( pt => <li>
                        {pt}
                    </li> )
                }
            </ol>
        </div>
    )
}
