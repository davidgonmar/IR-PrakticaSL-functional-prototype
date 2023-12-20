import { FaPencil } from 'react-icons/fa6';
import { FaTrash } from 'react-icons/fa6';

export function ReusableList({ items, onDeleteItem }) {
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
        />
      ))}
    </div>
  );
}

function Item({ title, onDeleteItem }) {
  return (
    <div
      className='item border border-black bg-white p-2 d-flex justify-content-between align-items-center'
      style={{ borderRadius: 9999 }}
    >
      <h3 className='m-0'>{title}</h3>
      <FaPencil className='me-2 ms-auto' style={{ height: 24, width: 24 }} />
      <FaTrash
        className='me-2'
        style={{ height: 24, width: 24 }}
        onClick={onDeleteItem}
      />
    </div>
  );
}
