import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './Page/loginPage/loginPage';
import SigninPage from './Page/signinPage/signinPage';
import DashboardPage from './Page/dashboardPage/dashboardPage';
import Table from './components/table/table';
import FormPage from './Page/formPage/form';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SigninPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/list" element={<Table />} />
        <Route path="/create" element={<FormPage />} />
        <Route path="*" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;


// {/* <LoginPage/> */}

// {/* <SigninPage/> */}

// {/* <FormPage/>  */}

// {/* <Table/> */}