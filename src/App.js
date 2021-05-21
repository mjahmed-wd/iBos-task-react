import "./App.css";
import Form from "./components/Form";
import Table from "./components/Table";
import UsersProvider from "./components/UsersProvider";

function App() {
  
  return (
    <UsersProvider>
      <Form />
      <Table />
    </UsersProvider>
  );
}

export default App;
