import React from 'react'

const Nav = () => {
  return (
    <div className='w-full h-fit px-10 flex justify-between py-5 items-center'>
        <p className='text-[#f5f5f5] hover:text-[#858585] transition-all ease-in cursor-pointer duration-200 font3'>ZERROR STUDIO</p>

        <div className='w-fit h-fit flex  gap-4'>
            <div className='w-full h-12 rounded-lg flex bg-[#2C2C2C] group gap-88 transition-all ease-in cursor-pointer duration-200 px-7 justify-center items-center'>
                <p className='font2 text-[0.8rem] text-[#f5f5f5]'>MENU</p>
                <div className='w-fit h-12 flex flex-col gap-1 group-hover:gap-3 justify-center items-center transition-all ease-in cursor-pointer duration-200'>
                    <div className='w-[1.3rem] h-[0.03rem] rounded-full bg-[#f5f5f5]'></div>
                    <div className='w-[1.3rem] h-[0.03rem] rounded-full bg-[#f5f5f5]'></div>
                </div>
            </div>

            <div className='w-17 flex h-12 bg-[#2C2C2C] relative rounded-lg group transition-all ease-in cursor-pointer duration-200'>
                <div className='w-[1.3rem] h-[0.07rem] origin-center -rotate-35 group-hover:rotate-35 transition-all ease-in cursor-pointer duration-200 flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white'></div>
                <div className='w-[1.3rem] h-[0.07rem] origin-center rotate-35 group-hover:-rotate-35 transition-all ease-in cursor-pointer duration-200 flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white'></div>
            </div>
        </div>

        <p className='text-[#f5f5f5] font2 hover:text-[#858585] transition-all ease-in cursor-pointer duration-200 uppercase text-[0.8rem]'>Contact</p>
    </div>
  )
}

export default Nav