import { StyledSection, SectionBody, SectionHeader, SectionTitle, FlexContainer } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
    <StyledSection>
        <SectionHeader>
            <SectionTitle>
                {title}
            </SectionTitle>
            <FlexContainer>
                {extraHeaderContent}
            </FlexContainer>
        </SectionHeader>
        <SectionBody>
            {body}
        </SectionBody>
    </StyledSection>
);

export default Section;