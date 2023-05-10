import CustomerForm from "./components/CustomerForm";
import CustomerList from "./components/CustomerList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Customer Manage System</h1>
      <CustomerForm />
      <CustomerList />
    </div>
  );
}

export default App;
