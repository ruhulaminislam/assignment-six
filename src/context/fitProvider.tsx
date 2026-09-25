"use client"
import { IData } from '@/types/AlldataTypes'
import React, { createContext, useState } from 'react'
interface FitContextType {
  SavedFit: IData[]
  AddtoFit: IData[]
  setSavedFit:React.Dispatch<React.SetStateAction<IData[]>>
  setAddtoFit:React.Dispatch<React.SetStateAction<IData[]>>
}
export const FitContext = createContext<FitContextType>({
  SavedFit: [],
  AddtoFit: [],
  setSavedFit: () => {},
  setAddtoFit: () => {},
})
const FitProvider = ({ children }:{children:React.ReactNode}) => {
  const [SavedFit, setSavedFit] =useState<IData[]>([])
  const [AddtoFit, setAddtoFit] = useState<IData[]>([])

  const AllFit={
    SavedFit,
    AddtoFit,
    setSavedFit,
    setAddtoFit
  }
  return (
    <FitContext.Provider value={AllFit}>
      {children}
    </FitContext.Provider>
  )
}

export default FitProvider
