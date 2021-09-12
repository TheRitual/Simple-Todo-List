import { toAuthor, toTasks } from '../../routes';
import { LinkItem, LinkList, MenuWrapper, StyledNavLink } from './styled';

const Menu = () => (
    <MenuWrapper>
        <LinkList>
            <LinkItem> <StyledNavLink to={toTasks()}>ToDo List</StyledNavLink> </LinkItem>
            <LinkItem> <StyledNavLink to={toAuthor()}>About the Author</StyledNavLink> </LinkItem>
        </LinkList>
    </MenuWrapper>
);


export default Menu;