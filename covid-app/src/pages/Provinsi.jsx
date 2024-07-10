import { useState } from "react";
import Hello from "../components/hello";
import data from "../utils/constants/indonesia";
import DataProv from "../utils/constants/provinces";
import Dapro from "../components/dapro/Dapro";
import Coform from "../components/coform/Coform";

const Provinsi = () => {
    const [dabals, setDabals] = useState(data);
    const [daporv, setDaporv] = useState(DataProv.provinces);
    return (
        <main>
            <Hello />
            {/* <DataCard dabals={dabals.indonesia} setDabals={setDabals} title="Indonesia" subtitle="Data Covid Berdasarkan Indonesia" /> */}
            <Dapro title="Provinsi" subtitle="Data Covid Berdasarkan Provinsi" />
            <Coform daporv={daporv} setDaporv={setDaporv} />
            {/* <Regions dabals={dabals.indonesia} setDabals={setDabals} /> */}
        </main>
    );
}

export default Provinsi;