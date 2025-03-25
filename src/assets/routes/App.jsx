import { BrowserRouter, Route, Routes } from "react-router";
import { Landing } from "../layouts/Landing";
import { Servicios } from "../layouts/Servicios";
import { Login } from "../layouts/Login";
import { Admin } from "../layouts/admin";
import { Instructor } from "../layouts/Instructor";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/parapente/:id" element={<Servicios />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/admin-dashboard" element={<Admin />} />
          <Route path="/instructor-dashboard" element={<Instructor />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
