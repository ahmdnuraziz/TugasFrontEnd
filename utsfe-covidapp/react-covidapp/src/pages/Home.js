
import data from "../utils/constants/indonesia";
import { useState } from "react";
import Navbar from "../components/navbar";
import Dabals from "../components/dabals/Dabals";
import Hello from "../components/hello";
import Dapro from "../components/dapro/Dapro";
import Coform from "../components/coform/Coform";
import Footer from "../components/footer";

function Main() {

  const [dabals, setDabals] = useState(data);

  return (
    <main>
      <Hello />
      <Dabals dabals={dabals} setDabals={setDabals} />
      <Dapro/>
      <Coform />
    </main>
  );
}

function Home() {
  return (
    <>
      <Navbar />
      <Main />
      <Footer />
    </>
  );
}

export default Home;