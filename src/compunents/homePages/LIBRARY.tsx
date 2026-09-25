import { FaceAllData } from '@/lib/FaceAllData'
import { IData } from '@/types/AlldataTypes'
import Image from 'next/image'
import React from 'react'
import LIbraaryCards from '../Shards/LIbraaryCards'

const LIBRARY = async () => {
 const datas = await FaceAllData()
  return (
     
    <div className='container mx-auto mt-[70px] '>
       <div>
        <h1 className='text-[#FFFFFF] font-bold text-4xl'>THE LIBRARY</h1>
        <p className='text-[#9CA3AF]'>Twelve lifts covering every major muscle group.</p>
       </div>
       <div className='grid grid-cols-3 gap-10 mt-[70px] rounded-3xl '>
        {
         datas.map((data:IData) => {
          return (
            <div key={data.id} className=''>
              <LIbraaryCards data={data}></LIbraaryCards>
            </div>
          )
         }) 
        }
       </div>
    </div>
  )
}

export default LIBRARY
