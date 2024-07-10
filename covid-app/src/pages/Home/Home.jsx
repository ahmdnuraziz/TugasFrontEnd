import { useEffect, useState } from "react";
import Hello from "../../components/hello";
import DataCard from "../../components/dabal/DataCard";
import ENDPOINTS from "../../utils/constants/endpoints";
import axios from "axios";
import Regions from "../../components/darags/Regions";

function Main() {
  const [dabals, setDabals] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    GetData();
  }, []);

  const GetData = async () => {
    try {
      const response = await axios.get(ENDPOINTS.GLOBAL);
      setDabals(response.data);
    } catch (err) {
      console.error('Error fetching data:', err);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching data: {error.message}</div>;
  }

  return (
    <main>
      <Hello />
      {dabals.global && (
        <DataCard dabals={dabals.global} setDabals={setDabals} title="Global Situation" subtitle="Data Covid Berdasarkan Global" />
      )}
      <Regions dabals={dabals.regions} setDabals={setDabals} title="Situation by Provinces" subtitle="Data Covid Berdasarkan Provinsi" />
    </main>
  );
}

function Home() {
  return (
    <>
      <Main />
    </>
  );
}

export default Home;
