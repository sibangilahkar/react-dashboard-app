// import FormPage from "../formPage/form";
import Aside from "../../components/aside/aside";
import Nav from "../../components/nav/nav";

function FormPage() {
  return (
    <div className="">
      <div className="">
        <Aside />
      </div>

      <div className="">
        <Nav />
      </div>

      <div className="ml-60 mt-6">



      <div className=" h-5/6 flex w-auto  mt-2 pb-2 ">
      <form className="mt-6 ">
        <h6 className=" mb-9  ml-6  font-sans text-xl font-semibold">
          Create User
        </h6>

        <label className="ml-7 " for="fname">
          First name:
        </label>
        <input
          className="ml-7 mt-1 h-10 w-80 flex bg-gray-200"
          type="text"
          id="fname"
          name="fname"
        />
        <br />
        <label className="ml-7 " for="lname">
          Last name:
        </label>
        <input
          className="ml-7 mt-1 h-10 w-80 flex bg-gray-200"
          type="text"
          id="lname"
          name="lname"
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

        <input
          className="bg-blue-800 rounded-xl text-lg text-white font-semibold flex justify-center items-center h-10 w-40 ml-24  "
          type="submit"
          value="Submit"
        />
      </form>
    </div>

      </div>
    </div>
  );
}
export default FormPage;