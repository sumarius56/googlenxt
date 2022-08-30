import React from 'react'









const HeaderOption = ({ title , Icon , selected }) => {
  return (
    <div className={`flex items-center space-x-1 border-b-4 border-transparent pb-3 hover:border-blue-900 hover:text-blue-900 cursor-pointer ${selected && 'text-blue-900 border-blue-900'}`}>
      <Icon className='h-4' />
      <p className='hidden sm:inline-flex'>{title}</p>
    </div>
  )
}

export default HeaderOption