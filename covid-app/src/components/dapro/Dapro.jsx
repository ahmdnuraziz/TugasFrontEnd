import { useContext } from "react";
import {
  Container,
  Title,
  Subtitle,
  TableContainer,
  Table,
  TableHeader,
  TableCell,
  TableRow,
} from "./StyleDapro";
import { ContextProvinsi } from "../Context/ContextProvinsi";

function Dapro(props) {
  const { title = '', subtitle = '' } = props;
  const { daporv } = useContext(ContextProvinsi);

  let no = 1;

  return (
    <Container>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      <TableContainer>
        <Table>
          <thead>
            <tr>
              <TableHeader>No</TableHeader>
              <TableHeader>Kota</TableHeader>
              <TableHeader>Positif</TableHeader>
              <TableHeader>Sembuh</TableHeader>
              <TableHeader>Dirawat</TableHeader>
              <TableHeader>Meninggal</TableHeader>
            </tr>
          </thead>
          <tbody>
            {daporv.provinces.map((dapro) => (
              <TableRow key={dapro.kota}>
                <TableCell>{no++}</TableCell>
                <TableCell>{dapro.kota}</TableCell>
                <TableCell>{dapro.kasus}</TableCell>
                <TableCell>{dapro.sembuh}</TableCell>
                <TableCell>{dapro.dirawat}</TableCell>
                <TableCell>{dapro.meninggal}</TableCell>
              </TableRow>
            ))}
          </tbody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default Dapro;
