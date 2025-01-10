import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    title: "Campaign",
  };

const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <main className='flex flex-col justify-center items-center w-screen'>
      {children}
    </main>
  )
}

export default layout
