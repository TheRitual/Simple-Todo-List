import { Container } from "../../common/Container/styled";
import Header from "../../common/Header";
import Section from "../../common/Section";
import ThemeSwitch from "../themeSwitch/ThemeSwitch";
import Information from "./Information";

const Author = () => (
    <Container>
        <Header title="Author" />
        <Section title="Marcin Kawczyński" body={<Information/>} extraHeaderContent={<ThemeSwitch />} />
    </Container>
);


export default Author;