import { Link } from "react-router-dom";
import Logo from '../../images/dighub.png';

function SigninPage (){

    return(
        <div className="bg-zinc-300 min-h-full pb-5 flex w-96 m-auto mt-1">
            <div className="h-14 w-14 absolute ml-40 mt-2 "><img  src={Logo}/> 
            </div>

      <form className=" mt-10"></form>
      <form className="mt-7 ">
        
<h6 className="mb-7  ml-6  font-sans text-xl font-semibold">Sign Up</h6>
        <label className="ml-7 " for="fname">
          Name:
        </label>
        <input
          className="ml-7 mt-1 h-10 w-80 flex bg-gray-200"
          type="text"
          id="fname"
          name="fname"
        />
        <br />
       
        <label className="ml-7 " for="email">
          Email:
        </label>
        <input
          className="ml-7 mt-1 h-10 w-80 flex bg-gray-200"
          type="email"
          id="email"
          name="Email"
        />
        <br />

        <label className="ml-7 " for="pwd">
          Password:
        </label>
        <input
          className=" ml-7 mt-1 h-10 w-80 flex bg-gray-200"
          type="password"
          id="pwd"
          name="pwd"
        />
        <br />

        <label className="ml-7 " for="pwd">
          Re-type Password:
        </label>
        <input
          className=" ml-7 mt-1 h-10 w-80 flex bg-gray-200"
          type="password"
          id="pwd"
          name="pwd"
        />
        <br />

        <label className="ml-7 " for="phone no">
          Phone no:
        </label>
        <input
          className="ml-7 mt-1 h-10 w-80 flex bg-gray-200"
          type="number"
          id="phone no"
          name="phone no"
        />
<br />

        <button
          className="bg-blue-800 rounded-xl text-lg text-white font-semibold flex justify-center items-center h-10 w-40 ml-24 mt-2 "
        ><Link to="/dashboard">Sing Up</Link></button>
      </form>
    </div>
    )
}
export default SigninPage