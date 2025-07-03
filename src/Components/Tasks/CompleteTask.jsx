import React from 'react'

function CompleteTask({ data }) {
  return (
    <div className="relative group flex-shrink-0 h-full w-[310px] bg-[#065647] rounded-2xl overflow-hidden transition-all duration-300">

      <div className="relative z-10">
        <div className="flex justify-between items-center px-5 py-6">
          <h3 className="text-sm bg-red-600 px-3 py-1 rounded-md font-bold text-white">
            {data.category}
          </h3>
          <h4 className="text-sm text-white font-bold">{data.taskDate}</h4>
        </div>
        <div className="px-6">
          <h2 className="text-2xl font-bold text-white">
            {data.taskTitle}
          </h2>
          <h4 className="h-[15vh] overflow-x-auto scrollbar-hide text-white font-semibold mt-5">
            {data.taskDescription}
          </h4>
          <div className='flex justify-center gap-5'>
      
              <svg className="m-1" width="25" height="25" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M39.8015 12.4052C40.7048 11.4899 42.1693 11.4899 43.0726 12.4052C43.9647 13.3093 43.9757 14.7682 43.1054 15.6859L24.6258 37.5304C24.608 37.5529 24.589 37.5744 24.5689 37.5948C23.6656 38.5101 22.2011 38.5101 21.2979 37.5948L10.0524 26.1996C9.14918 25.2843 9.14918 23.8004 10.0524 22.8851C10.9557 21.9698 12.4202 21.9698 13.3235 22.8851L22.8637 32.5523L39.7402 12.4753C39.7592 12.4507 39.7797 12.4273 39.8015 12.4052Z" fill="white" stroke="white" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
    
          </div>
        </div>
      </div>
{/* //hoverrr */}

      <div className="absolute inset-0 bg-emerald-700 flex items-center justify-center 
    translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 
    transition-transform duration-500 ease-in-out z-20 rounded-2xl">
        <span className="text-white text-5xl font-bold">   

                 <svg className="m-1" width="80" height="80" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M39.8015 12.4052C40.7048 11.4899 42.1693 11.4899 43.0726 12.4052C43.9647 13.3093 43.9757 14.7682 43.1054 15.6859L24.6258 37.5304C24.608 37.5529 24.589 37.5744 24.5689 37.5948C23.6656 38.5101 22.2011 38.5101 21.2979 37.5948L10.0524 26.1996C9.14918 25.2843 9.14918 23.8004 10.0524 22.8851C10.9557 21.9698 12.4202 21.9698 13.3235 22.8851L22.8637 32.5523L39.7402 12.4753C39.7592 12.4507 39.7797 12.4273 39.8015 12.4052Z" fill="white" stroke="white" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg></span>
      </div>
    </div>

  )
}

export default CompleteTask