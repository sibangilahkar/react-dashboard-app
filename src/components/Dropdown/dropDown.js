import React from 'react'

function DropDown() {
  return (
    <div>
        <button className=" relative flex  bg-blue-800-to-r from-slate-950 to bg-indigo-400 grid place-items-center h-10 w-40 pl-2 justify-between border-4 active:border-black active:text-white duration-150">Dropdown
         <div className="absolute  min-w-full w-max shadow-md rounded bg-slate-100 top-full ">
         <ul className="text-left border rounded">
         <li className="px-4 py-1 hover:bg-slate-300 border-b">london</li>
         <li className="px-4 py-1 hover:bg-slate-300 border-b">peris</li>
         <li className="px-4 py-1 hover:bg-slate-300 border-b">itly</li>
         <li className="px-4 py-1 hover:bg-slate-300 border-b">goa</li>
         </ul>
         </div>
        </button>
        </div>
  )
}

export default DropDown
