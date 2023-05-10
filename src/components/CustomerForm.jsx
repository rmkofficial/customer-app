import "./CustomerForm.css";

const CustomerForm = () => {
  return (
    <div>
      <form className="customer-form">
        <input
          type="text"
          className="customer-input"
          placeholder="Add a new customer"
        ></input>
        <button>
          <i className="bi bi-plus-lg"></i>
        </button>
      </form>
    </div>
  );
};

export default CustomerForm;
