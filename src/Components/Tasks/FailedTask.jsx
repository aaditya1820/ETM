import React from 'react'

function FailedTask({ data }) {
return (
  <div className="relative group flex-shrink-0 h-full w-[310px] bg-[#8A1C1C] rounded-2xl overflow-hidden transition-all duration-300">
    {/* Card Content */}
    <div className="relative z-10">
      <div className="flex justify-between items-center px-5 py-6">
        <h3 className="text-sm bg-red-800 px-3 py-1 rounded-md font-bold text-white">
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
      </div>
      <div className='flex relative justify-center'>
    
          <svg className='m-1' width="25" height="26" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 13L37 37" stroke="white" strokeWidth="5" strokeLinecap="round" />
            <path d="M37 13L13 37" stroke="white" strokeWidth="5" strokeLinecap="round" />
          </svg>
        
      </div>
    </div>

    <div className="absolute inset-0 bg-red-700 flex items-center justify-center 
      translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 
      transition-transform duration-500 ease-in-out z-20 rounded-2xl">
      <span className="text-white text-5xl font-bold">  <svg className='m-1' width="80" height="80" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 13L37 37" stroke="white" strokeWidth="5" strokeLinecap="round" />
            <path d="M37 13L13 37" stroke="white" strokeWidth="5" strokeLinecap="round" />
          </svg></span>
    </div>
  </div>
);

}

export default FailedTask