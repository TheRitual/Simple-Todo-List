import { Container } from "../../common/Container/styled";
import Header from "../../common/Header";
import Section from "../../common/Section";
import ThemeSwitch from "../../common/ThemeSwitch";

const Author = () => (
    <Container>
        <Header title="Author" />
        <Section title="Marcin Kawczyński" body={<>About Author something</>} extraHeaderContent={<ThemeSwitch />} />
    </Container>
);


export default Author;