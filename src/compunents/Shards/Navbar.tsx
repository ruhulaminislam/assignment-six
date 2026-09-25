"use client"
import logo from "@/assets/logo.png"
import Image from 'next/image'
import PlanCount from '../counts/PlanCount'
import SavedCount from '../counts/SavedCount'
import Link from 'next/link'
import { usePathname } from "next/navigation"
const Navbar = () => {
  const pathname=usePathname()
  return (
    <nav className=" ">
        <div className="flex  justify-between items-center container mx-auto py-3">
        <div className="flex items-center gap-3">
            <Image className='h-[30px] w-[30px]' src={logo} alt="logo" width={100} height={100} />
            <h1 className='font-bold' >FITLOG</h1>
        </div>
         <ul className='flex gap-4 items-center'>
           <Link className={pathname==="/"? "bg-[#1A2312] text-[#C2F800] py-2 px-4 rounded-3xl" :""} href="/"> <li>Workouts</li></Link>
            <Link className={pathname==="/MyPlan"? "bg-[#1A2312] text-[#C2F800] py-2 px-4 rounded-3xl" :""} href="/MyPlan"><li>My Plan</li></Link>
         </ul>

       <ul className='flex gap-3'>
        <PlanCount></PlanCount>
        <SavedCount></SavedCount>
       </ul>


    </div>  
     <hr className="border-[#3D3F45] w-full"/>
    </nav>
    
  )
}

export default Navbar
