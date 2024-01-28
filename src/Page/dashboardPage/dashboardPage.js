import Table from "../../components/table/table";
// import FormPage from "../formPage/form";
import Aside from "../../components/aside/aside";
import Nav from "../../components/nav/nav";

function DashboardPage() {
  return (
    <div className="">
      <div className="">
        <Aside />
      </div>

      <div className="">
        <Nav />
      </div>

      <div className="ml-60 mt-6">
        <Table />
      </div>
    </div>
  );
}
export default DashboardPage;
