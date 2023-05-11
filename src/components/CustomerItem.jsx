function CustomerItem({ customer }) {
  return (
    <li className="customer-item">
      <div className="customer-info">
        <img
          src="https://i.pravatar.cc/300"
          className="customer-avatar"
          alt=""
        />
        <span className="customer-name">{customer.customerName}</span>
      </div>
      <button className="delete-button">
        <i className="bi bi-trash3"></i>
      </button>
    </li>
  );
}

export default CustomerItem;
