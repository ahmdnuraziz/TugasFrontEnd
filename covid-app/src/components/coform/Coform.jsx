import { useContext, useState } from "react";
import {
  Container,
  Form,
  FormLeft,
  FormRight,
  FormImage,
  FormTitle,
  FormGroup,
  FormLabel,
  FormInput,
  FormSelect,
  FormButton,
} from "./StyleCoform";
import Alert from "../Alert/Alert";
import { ContextProvinsi } from "../Context/ContextProvinsi";

function Coform(props) {
  const { daporv, setDaporv } = useContext(ContextProvinsi);

  const statusss = ["kasus", "sembuh", "dirawat", "meninggal"];

  const [kota, setKota] = useState("");
  const [status, setStatus] = useState("");
  const [jumlah, setJumlah] = useState("");

  const [isKotaError, setIsKotaError] = useState(false);
  const [isStatusError, setIsStatusError] = useState(false);
  const [isJumlahError, setIsJumlahError] = useState(false);

  const handleKota = (event) => setKota(event.target.value);

  const handleStatus = (event) => setStatus(event.target.value);

  const handleJumlah = (event) => setJumlah(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();

    const isKotaValid = kota !== "";
    const isStatusValid = status !== "";
    const isJumlahValid = jumlah !== "";

    setIsKotaError(!isKotaValid);
    setIsStatusError(!isStatusValid);
    setIsJumlahError(!isJumlahValid);

    if (isKotaValid && isStatusValid && isJumlahValid) {
      const updatedDaporv = daporv.provinces.map((prov) => {
        if (prov.kota === kota) {
          return {
            ...prov,
            kasus: status === "kasus" ? prov.kasus + parseInt(jumlah) : prov.kasus,
            sembuh: status === "sembuh" ? prov.sembuh + parseInt(jumlah) : prov.sembuh,
            dirawat: status === "dirawat" ? prov.dirawat + parseInt(jumlah) : prov.dirawat,
            meninggal: status === "meninggal" ? prov.meninggal + parseInt(jumlah) : prov.meninggal,
          };
        }
        return prov;
      });

      setDaporv({ ...daporv, provinces: updatedDaporv });

      setKota("");
      setStatus("");
      setJumlah("");
    }
  };

  return (
    <Container>
      <Form>
        <FormLeft>
          <FormImage
            src="https://zbase-global.zingfront.com/saasbox/resources/png/1-6__2db659082b65e6cb8077373c4164e8dc.png"
            alt=""
          />
        </FormLeft>
        <FormRight>
          <FormTitle>Form Covid</FormTitle>
          <form onSubmit={handleSubmit}>
            <FormGroup>
              <FormLabel>Provinsi</FormLabel>
              <FormSelect
                id="kota"
                name="kota"
                value={kota}
                onChange={handleKota}
              >
                <option value="">Pilih Provinsi</option>
                {daporv.provinces.map((prov, key) => (
                  <option value={prov.kota} key={key}>
                    {prov.kota}
                  </option>
                ))}
              </FormSelect>
              {isKotaError && <Alert>Provinsi Wajib Diisi</Alert>}
            </FormGroup>
            <FormGroup>
              <FormLabel>Status</FormLabel>
              <FormSelect
                id="status"
                name="status"
                value={status}
                onChange={handleStatus}
              >
                <option value="">Pilih Status</option>
                {statusss.map((stats, key) => (
                  <option value={stats} key={key}>
                    {stats}
                  </option>
                ))}
              </FormSelect>
              {isStatusError && <Alert>Status Wajib Diisi</Alert>}
            </FormGroup>
            <FormGroup>
              <FormLabel htmlFor="jumlah">Jumlah</FormLabel>
              <FormInput
                id="jumlah"
                type="text"
                name="jumlah"
                value={jumlah}
                onChange={handleJumlah}
              />
              {isJumlahError && <Alert>Jumlah Wajib Diisi</Alert>}
            </FormGroup>
            <div>
              <FormButton type="submit">Add Form Covid</FormButton>
            </div>
          </form>
        </FormRight>
      </Form>
    </Container>
  );
}

export default Coform;
