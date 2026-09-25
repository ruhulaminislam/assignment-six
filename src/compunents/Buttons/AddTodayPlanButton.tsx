
"use client"

import { FitContext } from '@/context/fitProvider'
import { IData } from '@/types/AlldataTypes'
import React, { useContext } from 'react'
import { BiCalendarPlus } from 'react-icons/bi'
import { Bounce, toast } from 'react-toastify'

const AddTodayPlanButton = ({ datas }: { datas: IData }) => {

  const { AddtoFit, setAddtoFit } = useContext(FitContext)

  const handleAddClick = () => {

    if (AddtoFit.find((item) => item.id === datas.id)) {

      toast.warn(`You have already ${datas.name} in your plan`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      })

    } else {

      setAddtoFit([...AddtoFit, datas])

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
      })

    }

  }

  return (
    <div className="w-full sm:w-auto">

      <button
        onClick={() => handleAddClick()}
        className="
          btn
          bg-[#C2F800]
          py-3
          px-3 sm:px-4
          rounded-[10px]
          text-[#0F1115]
          w-full sm:w-auto
          text-sm sm:text-base
        "
      >
        <BiCalendarPlus />
        Add to today's plan
      </button>

    </div>
  )
}

export default AddTodayPlanButton

