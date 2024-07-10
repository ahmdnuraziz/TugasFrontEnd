import { useEffect, useState } from "react";
import DataCard from "../components/dabal/DataCard";
import Hello from "../components/hello";
import Dapro from "../components/dapro/Dapro";
import axios from "axios";
import ENDPOINTS from "../utils/constants/endpoints";

const Indonesia = () => {
    const [dabals, setDabals] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        GetData();
    }, []);

    const GetData = async () => {
        try {
            const response = await axios.get(ENDPOINTS.INDONESIA);
            setDabals(response.data);
        } catch (err) {
            console.error('Error fetching data:', err);
            setError(err);
        } finally {
            setLoading(false);
        }
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error fetching data: {error.message}</div>;
    }

    return (
        <main>
            <Hello />
            {dabals.indonesia && (
                <>
                    <DataCard dabals={dabals.indonesia} setDabals={setDabals} title="Indonesia" subtitle="Data Covid Berdasarkan Indonesia" />
                </>
            )}
            <Dapro title="Situation by Provinces" subtitle="Data Covid Berdasarkan Provinsi" />
        </main>
    );
}

export default Indonesia;
