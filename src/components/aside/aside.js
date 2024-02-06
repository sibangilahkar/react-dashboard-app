import { Link } from "react-router-dom";

function  Aside (){
    return(
        <div> 
      
        <aside className="bg-slate-900 fixed text-white top-0 left-0 z-40 w-48 h-screen transition-transform ">

<div className= " font-serif text-blue-500 font-extrabold text-xl ml-3 mt-3">Dighub</div>

<div className="mt-20">
<ul className="font-mono ">
<li className="mt-5 border-b border-amber-950"><Link to="/dashboard" className="flex items-center pl-5 text-white rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">Dashboard</Link></li>
<li className="mt-5 border-b border-amber-950"><Link to="/create" className="flex items-center pl-5 text-white rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">Create user</Link></li>

</ul>
</div>
        </aside>




    </div>
    )
}
export default Aside