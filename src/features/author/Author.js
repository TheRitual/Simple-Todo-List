import { Container } from "../../common/Container/styled";
import Header from "../../common/Header";
import Section from "../../common/Section";

const Author = () => (
    <Container>
        <Header title="Author" />
        <Section title="Marcin Kawczyński" body={<>About Author something</>} />
    </Container>
);


export default Author;