import React from 'react'

function Select() {
  return (
    <div className=" ">
        <span>City :</span>
        <select className=" relative flex  h-50 w-80 bg-blue-800-to-r from-slate-950 to bg-indigo-400  ">
        <option className="px-4 py-1 hover:bg-slate-300 border-b"></option>
        <option className="px-4 py-1 hover:bg-slate-300 border-b">bot</option>
        <option className="px-4 py-1 hover:bg-slate-300 border-b">kooot</option>
        <option className="px-4 py-1 hover:bg-slate-300 border-b">little</option>
        <option className="px-4 py-1 hover:bg-slate-300 border-b">noutd</option>
        </select>
        </div>
  )
}

export default Select
