function Item({ item, handleClick }) {
  return (
    <>
      <li className="list-group-item">
        <span>{item}</span>
        <button
          className="btn btn-sm btn-outline-success float-end"
          onClick={handleClick}
        >
          Buy
        </button>
      </li>
    </>
  );
}

export default Item;
