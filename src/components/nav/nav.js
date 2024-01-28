// import SearchBar from '../searchbar/searchBar';
import Profile from '../profile/profile';

function Nav (){
    return (
        <div>
<nav className="h-14  flex justify-around bg-slate-400 text-white shadow-md  shadow-gray-600">
    <div>
    <form className="mt-3 ml-40 text-amber-600">
      <input className="h-8 w-60 rounded-md bg-slate-100 border " type="text" placeholder="Search.." name="search"/>
      <button className="" type="submit"><i class="fa fa-search"></i></button>
    </form>
    </div>






<div className=' flex  '>
<a className="self-center ml-10 mr-5" href="">Notification</a>
<a className="self-center ml-10  mr-2" href="">Sibangi</a>
<Profile/>
</div>


     </nav>

        </div>

        

    
    )
}
export default  Nav