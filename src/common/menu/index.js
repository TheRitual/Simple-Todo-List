import { Link } from 'react-router-dom';
import { LinkItem, LinkList, MenuWrapper } from './styled';

const Menu = () => (
    <MenuWrapper>
        <LinkList>
            <LinkItem> <Link to="/tasks">ToDo List</Link> </LinkItem>
            <LinkItem> <Link to="/author">About the Author</Link> </LinkItem>
        </LinkList>
    </MenuWrapper>
);


export default Menu;