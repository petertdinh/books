import Item from './Item';
import './List.css';

const List = ({ items }) => {
  return (
    <div className="list">
      <ul>
        {items.map(item => (
          <Item key={item.isbn} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default List;
