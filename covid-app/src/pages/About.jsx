import { useState } from "react";
import data from "../utils/constants/indonesia";
import DataProv from "../utils/constants/provinces";
import DataInfo from "../components/DataInfo/DataInfo";

const About = () => {
    const [dabals, setDabals] = useState(data);
    const [daporv, setDaporv] = useState(DataProv.provinces);
    return (
        <main>
            <DataInfo />
        </main>
    );
}

export default About;