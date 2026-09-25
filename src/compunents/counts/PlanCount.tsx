"use client"
import { FitContext } from '@/context/fitProvider'
import Link from 'next/link'
import React, { useContext } from 'react'

const PlanCount = () => {
    const { AddtoFit } = useContext(FitContext)
  return (
    <div className='flex gap-2 items-center'>
        <Link href="/MyPlan"><li>Plan</li></Link>
      <li className='text-[#000000] bg-[#C2F800] rounded-full py-1 px-3'>{AddtoFit.length}</li>
    </div>
  )
}

export default PlanCount
