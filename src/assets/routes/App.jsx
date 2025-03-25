
import { BrowserRouter, Route, Routes } from "react-router";
import { Landing } from "../layouts/Landing";
import { Servicios } from "../layouts/Servicios";
import { Login } from "../layouts/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/parapente/:id" element={<Servicios />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
