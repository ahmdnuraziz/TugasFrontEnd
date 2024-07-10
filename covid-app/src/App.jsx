import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Layout from "./Layout/Layout";
import Indonesia from "./pages/Indonesia";
import Provinsi from "./pages/Provinsi";
import About from "./pages/About";
import DataProv from "./utils/constants/provinces";
import { ContextProvinsi } from "./components/Context/ContextProvinsi";
import { useState } from "react";

function App() {
  const [daporv, setDaporv] = useState(DataProv);
  const DataProvinsi = {
    daporv, setDaporv
  }

  return (
    <ContextProvinsi.Provider value={DataProvinsi}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/indonesia" element={<Indonesia />} />
          <Route path="/provinsi" element={<Provinsi />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </ContextProvinsi.Provider>
  );
}

export default App;
