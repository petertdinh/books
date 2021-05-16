import './Item.css';

const Item = ({ item: { image, author, title, isbn } }) => {
  return (
    <li className="item">
      {/* using isbn here to bypass browser cache, otherwise we just get one cover image */}
      <img
        className="cover"
        src={`${image}?${isbn}`}
        alt={`${title} book cover`}
      />
      <section className="info">
        <p className="title">{title}</p>
        <p className="author">by {author}</p>
      </section>
    </li>
  );
};

export default Item;
