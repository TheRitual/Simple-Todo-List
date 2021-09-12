import { toAuthor, toTasks } from '../../routes';
import { LinkItem, LinkList, NavigationWrapper, StyledNavLink } from './styled';

const Navigation = () => (
    <NavigationWrapper>
        <LinkList>
            <LinkItem> <StyledNavLink to={toTasks()}>ToDo List</StyledNavLink> </LinkItem>
            <LinkItem> <StyledNavLink to={toAuthor()}>About the Author</StyledNavLink> </LinkItem>
        </LinkList>
    </NavigationWrapper>
);


export default Navigation;