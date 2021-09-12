import { LinkItem, LinkList, MenuWrapper, StyledNavLink } from './styled';

const Menu = () => (
    <MenuWrapper>
        <LinkList>
            <LinkItem> <StyledNavLink to="/tasks">ToDo List</StyledNavLink> </LinkItem>
            <LinkItem> <StyledNavLink to="/author">About the Author</StyledNavLink> </LinkItem>
        </LinkList>
    </MenuWrapper>
);


export default Menu;