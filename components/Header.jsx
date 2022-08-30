import React, { useRef } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { MicrophoneIcon, SearchIcon, XIcon } from '@heroicons/react/solid'
import Avatar from '../components/Avatar'
import HeaderOptions from './HeaderOptions'

const Header = () => {
 const router = useRouter()
 const searchInputRef = useRef(null)
 const search = (e) => {
  e.preventDefault()
  const term = searchInputRef.current.value
  if(!term) return;

  router.push(`search?term=${term}`)
 }

  return (
    <header className='sticky top-8 bg-white'>
     <div className='flex  w-full p-6 items-center'>
    <div className='flex items-center  '>
       <Image
       onClick={()=>router.push('/')}
        className='rounded-full cursor-pointer'
        src='https://beebom.com/wp-content/uploads/2021/09/How-to-Enable-or-Disable-Dark-Theme-on-a-Per-Site-Basis-in-Chrome.jpg?w=730&h=487&crop=1&quality=75'
        height={30}
        width={45}
        />
        <Image
        onClick={()=>router.push('/')}
        className='rounded-full cursor-pointer'
        src='https://www.nicepng.com/png/detail/880-8808596_png-file-svg-google-black-and-white-logo.png'
        height={50}
        width={120}
        />
        </div>
        <form className='flex flex-grow border border-gray-200 rounded-full shadow-lg max-w-3xl items-center px-6 py-3 ml-10 mr-5'>
         <input 
         className='flex-grow w-full focus:outline-none'
         type='text'
         ref={searchInputRef}
         />
         <XIcon className='h-7   sm:mr-3 cursor-pointer transition duration-100 transform hover:scale-125'
         onClick={()=> searchInputRef.current.value = ''}
         />
         <MicrophoneIcon
         className='h-6 mr-3 hidden sm:inline-flex border-l-2 pl-4 border-black '
         />
         <SearchIcon
         className='h-6 mr-3 hidden sm:inline-flex  '
          />
          <button
           hidden type='submit'
           onClick={search}
           >
           Search</button>
         </form>
         <Avatar
          url={'https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Trollface_non-free.png/220px-Trollface_non-free.png'}
          className='ml-auto' />
         </div>
         <HeaderOptions />  
    </header>
  )
}

export default Header