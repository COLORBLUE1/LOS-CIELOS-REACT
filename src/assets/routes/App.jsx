import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Landing from "../layouts/Landing";
import Servicios from "../layouts/Servicios";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/parapente/:id" element={<Servicios/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
