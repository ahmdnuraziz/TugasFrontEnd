import { Container, Section, Title, Subtitle, List, ListItem } from './StyleDataInfo';

const DataInfo = () => {
    return (
        <Container>
            <Section>
                <Title>Tentang Kami</Title>
                <Subtitle>
                    Halaman ini berisi informasi tentang data COVID-19 Indonesia dan Global serta biodata pembuat.
                </Subtitle>
            </Section>

            <Section>
                <Title>Data COVID-19</Title>
                <p>
                    Di sini dapat ditemukan informasi terkini tentang kasus COVID-19 baik di Indonesia maupun secara global.
                    Data ini bersumber dari sumber terpercaya dan diperbarui secara berkala.
                </p>
            </Section>

            <Section>
                <Title>Biodata Pengembang</Title>
                <List>
                    <ListItem><strong>Nama:</strong> Ahmad Nur Aziz</ListItem>
                    <ListItem><strong>NIM:</strong> 0110222003</ListItem>
                    <ListItem><strong>Program Studi:</strong> Teknik Informatika</ListItem>
                    <ListItem><strong>Perguruan Tinggi:</strong> Sekolah Tinggi Teknologi Terpadu Nurul Fikri (STT Terpadu Nurul Fikri)</ListItem>
                </List>
            </Section>
        </Container>
    );
};

export default DataInfo;
