import { Link } from "react-router-dom";
import Logo from '../../images/2023-09-10.jpg';

function LoginPage() {
  return (
    <div className="bg-zinc-300 flex  h-5/6 w-96 pb-8 m-auto mt-12 ">

        <div className="h-14 w-14 absolute ml-40 mt-2 "><img  src={Logo}/> </div>
      <form className=" mt-10">

      <h6 className=" mb-9  ml-6  font-sans text-xl font-semibold">
          Login
        </h6>

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

        

 <div className="flex">
 <button
          className="bg-blue-500 rounded-xl text-lg text-white font-semibold flex justify-center items-center h-10 w-36 ml-8 mt-10"
        ><Link to="/dashboard">Log In </Link> </button>

<button
          className="bg-blue-500 rounded-xl text-lg text-white font-semibold flex justify-center items-center h-10 w-36 ml-8 mt-10"
        > <Link to="/sign-up">Sing Up </Link> </button>

 </div>
        
      </form>
    </div>
  );
}
export default LoginPage;
