
"use client"
import { FitContext } from '@/context/fitProvider'
import Link from 'next/link'
import React, { useContext } from 'react'

const SavedCount = () => {
    const {SavedFit} = useContext(FitContext)
  return (
    <div className='flex gap-2 items-center'>
        <Link href="/MyPlan"><li>Saved</li></Link>
      <li className='border border-[#2D313B] py-1 px-3 rounded-full'>{SavedFit.length}</li>
    </div>
  )
}

export default SavedCount
