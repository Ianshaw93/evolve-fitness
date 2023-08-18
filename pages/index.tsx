"use client"

// TODO: bring over drizzle - use same planetscale db!
// bring over clerk - use same clerk app i.e. same user base etc!
export default function Home() {
  return (
   <>
      <div className="form-control bg-[#DADEDF]" >
        Exercise
      </div>
      <div  className="min-h-screen bg-gradient-to-t from-gray-600 via-gray-400 to-gray-600">
        {/* Title  move to own component or function above*/}
        <div className='grid-cols-3 flex justify-between max-w-full text-2xl font-thin text-[#D6D6D6] drop-shadow-[0_4px_4px_rgba(0,0,0)]'>
            <div className='col-span-1 col-start-1 mx-10'>
                Rank 
            </div>
            <div className='col-span-1 col-start-2 text-left'>
                Name
            </div>
            <div className='mx-10'>
                Result
            </div>
        </div>
      </div>

   </>
  )
}
