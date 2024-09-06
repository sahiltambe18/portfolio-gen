import React from 'react'

export default function Dashboard() {
    return (
        <div className='p-4 w-full h-screen ' >
            <div className='bg-purple-400 p-2 w-full h-full rounded-lg  ' >
                <div className='flex flex-col sm:flex-row bg-white w-full h-full rounded-lg shadow-2xl ' >
                    <div className='bg-red-500 w-1/2 overflow-y-auto p-3  ' >
                        window-1
                    </div>
                    <div className='bg-green-500 w-1/2 overflow-y-auto p-3 '>
                        window-2
                    </div>
                </div>
            </div>
        </div>
    )
}
