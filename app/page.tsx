import React from 'react'

type Props = {}

const HomeComponent = (props: Props) => {
  return (
    <div className='grid h-screen -w-full'>
      <div className='flex flex-col'>
        <header className='sticky top-0 z-10 h-[57px] bg-background flex items-center gap-1 border-b px-4'>
          <h1 className='text-xl font-semibold text-[#D90013]'>AI Doctor</h1>
          <div className='w-full flex flex-row justify-end gap-2'></div>
        </header>
      </div>
    </div>
  )
}

export default HomeComponent

//akshay sinha