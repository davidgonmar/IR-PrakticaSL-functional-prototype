export function ReusableList({ items }) {
  console.log(items);
  return (
    <div className='container'>
      {items.map((item, index) => (
        <Item key={index} title={item} />
      ))}
    </div>
  );
}

function Item({ title }) {
  return (
    <div className='item border border-black'>
      <h3>{title}</h3>
    </div>
  );
}
