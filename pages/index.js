import Head from 'next/head'
import Avatar from '../components/Avatar'
import {ViewGridIcon, MicrophoneIcon, SearchIcon} from '@heroicons/react/solid'
import Image from 'next/image'
import Footer from '../components/Footer'
import { useRef } from 'react'
import { useRouter } from 'next/router'


export default function Home() {
  const router = useRouter()
  const searchInputRef = useRef(null)

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;
    if(!term) return;
    router.push(`/search?term=${term}`)
  }


  return (
    <div className='flex flex-col items-center justify-center h-screen' >
      <Head>
        <title>Google NXT</title>
        <meta name="description" content="Created by Suciu Marius in NextJS" />
      </Head>
      {/* Header */}
      <header className='flex w-full p-5 justify-between text-sm text-gray-700'>
        {/* Left */}
        <div className='flex space-x-4 items-center'>
        <p className='link'>About</p>
        <p className='link'>Store</p>
        </div>
        {/* Right */}
        <div className='flex space-x-4 items-center'>
          <p className='link'>Gmail</p>
          <p className='link'>Images</p>
        {/*Icon */}
        <ViewGridIcon className='h-10 w-10 p-2 cursor-pointer rounded-full hover:bg-gray-300' />
        <Avatar url={'https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Trollface_non-free.png/220px-Trollface_non-free.png'} alt='Trollface' />
        </div>
      </header>
      {/* Body */}
      <form className='flex flex-col mt-44 items-center flex-grow w-4/5 mx-auto '>
        <div className='flex items-center justify-center'>
        <Image alt='/'
        className='rounded-full'
        src='https://beebom.com/wp-content/uploads/2021/09/How-to-Enable-or-Disable-Dark-Theme-on-a-Per-Site-Basis-in-Chrome.jpg?w=730&h=487&crop=1&quality=75'
        height={50}
        width={70}
        />
        <Image alt='/'
        className='rounded-full'
        src='https://www.nicepng.com/png/detail/880-8808596_png-file-svg-google-black-and-white-logo.png'
        height={120}
        width={300}
        />
        
        </div>
        <div className='flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-x-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl'>
          <SearchIcon className='h-5 mr-3' />
          <input
           ref={searchInputRef} 
           type='text' 
           placeholder='Search Google NXT' 
           className='focus:outline-none flex-grow' />
          <MicrophoneIcon className='h-5' />
        </div>
        <div className='flex flex-col w-1/2 space-y-2 justify-center mt-8  sm:space-y-0 sm:flex-row sm:space-x-4'>
          <button onClick={search} className='btn'>Google Search</button>
          <button onClick={search} className='btn'>I&apos;m Feeling Lucky</button>
        </div>
      </form>
      {/* Footer */}
      <Footer />
    </div>
  )
}
