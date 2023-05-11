import { useState } from "react";
import CustomerItem from "./CustomerItem";
import "./CustomerList.css";

const CustomerList = () => {
  const [customers, setCustomers] = useState([]);

  const addNewCustomer = (newCustomer) => {
    setCustomers([...customers, newCustomer]);
  };

  return (
    <ul className="customer-list">
      {customers.map((customer) => (
        <CustomerItem customer={customer} key={customer.id} />
      ))}
    </ul>
  );
};

export default CustomerList;
