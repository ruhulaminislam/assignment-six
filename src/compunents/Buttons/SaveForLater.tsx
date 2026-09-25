"use client"
import { FitContext } from '@/context/fitProvider'
import { IData } from '@/types/AlldataTypes'
import React, { useContext } from 'react'
import { BiBookmark } from 'react-icons/bi'
import { Bounce, toast } from 'react-toastify'

const SaveForLater = ({datas}:{datas:IData}) => {
     const { SavedFit,setSavedFit } = useContext(FitContext)
    const handleSaveClick = () => {
     if(SavedFit.find((item) => item.id === datas.id)){
       toast.warn(`You have already ${datas.name} in your plan`, {
position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
transition: Bounce  ,
});
    }else{
      setSavedFit([...SavedFit,datas])
      toast.success(`You have successfully added ${datas.name} to your plan`, {
position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
transition: Bounce,
});
    }
    }
  return (
    <div>
       <button   onClick={()=>handleSaveClick()}
        className='btn bg-[#0F1115] rounded-[10px] text-[#A8CDF0]'><BiBookmark /> Save for later</button>
    </div>
  )
}

export default SaveForLater
