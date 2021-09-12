import { Link } from 'react-router-dom';
import { LinkItem, LinkList } from './styled';

const Menu = () => (
    <nav>
        <LinkList>
            <LinkItem> <Link to="/tasks">ToDo List</Link> </LinkItem>
            <LinkItem> <Link to="/author">About the Author</Link> </LinkItem>
        </LinkList>
    </nav>
);


export default Menu;