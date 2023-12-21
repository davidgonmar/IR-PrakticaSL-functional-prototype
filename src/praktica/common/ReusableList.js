import { FaPencil, FaTrash } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

export function ReusableList({ items, onDeleteItem, link }) {
  return (
    <div
      className='d-flex flex-column'
      style={{
        backgroundColor: 'lightgray',
        paddingInline: 80,
        paddingBlock: 40,
        gap: 30,
      }}
    >
      {items.map((item, index) => (
        <Item
          key={index}
          title={item}
          onDeleteItem={() => onDeleteItem(index)}
          link={link} // Usar la prop 'link' directamente aquí
        />
      ))}
    </div>
  );
}

function Item({ title, onDeleteItem, link }) {
  return (
    <div
      className='item border border-black bg-white p-2 d-flex justify-content-between align-items-center'
      style={{ borderRadius: 9999 }}
    >
      <h3 className='m-0'>{title}</h3>
      <div className='d-flex align-items-center'>
        <Link to={link}>
          <FaPencil
            className='me-2'
            style={{ height: 24, width: 24, color: 'black' }} // Color negro
          />
        </Link>
        <FaTrash
          className='me-2'
          style={{ height: 24, width: 24 }}
          onClick={onDeleteItem}
        />
      </div>
    </div>
  );
}
