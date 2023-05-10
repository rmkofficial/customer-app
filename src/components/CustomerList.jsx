import CustomerItem from "./CustomerItem";
import "./CustomerList.css";

const CustomerList = () => {
  return (
    <ul className="customer-list">
      <CustomerItem />
    </ul>
  );
};

export default CustomerList;
